from flask import Flask, request, render_template, redirect, url_for, send_from_directory, jsonify
from datetime import datetime
import os
import pdfkit
import logging

logging.basicConfig(filename='error.log', level=logging.ERROR, encoding='utf-8')

app = Flask(__name__)
RESUME_DIR = os.path.join('static', 'resumes')
os.makedirs(RESUME_DIR, exist_ok=True)  # создаём папку, если не существует

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/career')
def career():
    return render_template('career.html')

@app.route('/success')
def success():
    file_url = request.args.get('file')
    return render_template('success.html', file_url=file_url)

@app.route('/generate', methods=['POST'])
def generate():
    try:
        required_fields = ['name', 'email', 'position', 'education', 'skills']
        for field in required_fields:
            if not request.form.get(field):
                return jsonify({"success": False, "error": f"Поле '{field}' не заполнено."}), 400

        data = {
            'name': request.form['name'],
            'email': request.form['email'],
            'position': request.form['position'],
            'education': request.form['education'],
            'skills': request.form['skills'],
            'experience': request.form.get('experience', '')  # если есть это поле
        }

        filename = f"resume_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
        filepath = os.path.join(RESUME_DIR, filename)

        # Конфигурация wkhtmltopdf
        config = pdfkit.configuration(wkhtmltopdf=r"C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe")

        rendered = render_template('resume_template.html', **data)
        pdfkit.from_string(rendered, filepath, configuration=config)

        # Возвращаем JSON с путём к файлу
        return jsonify({
            "success": True,
            "fileUrl": url_for('download_resume', filename=filename)
        })

    except Exception as e:
        logging.error(f"Ошибка при генерации резюме: {e}")
        return jsonify({
            "success": False,
            "error": "Произошла ошибка при генерации резюме."
        }), 500

@app.route('/resume/<filename>')
def download_resume(filename):
    return send_from_directory(RESUME_DIR, filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=False)

