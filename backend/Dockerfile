FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ../requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY ./backend /app

ENV FLASK_APP=app
ENV PYTHONPATH=/app

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]
