@echo off
echo [🛑] Завершаю процессы на порту 5000...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000 ^| findstr LISTENING') do (
    echo Убиваю PID %%a
    taskkill /PID %%a /F >nul 2>&1
)

echo [⏳] Жду освобождения порта...
timeout /t 1 >nul

echo [🚀] Запускаю Flask-сервер...

set FLASK_APP=main.py
set FLASK_ENV=development
start "" http://localhost:5000
python -m flask run

pause
