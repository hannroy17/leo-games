#!/bin/bash

echo "📦 Ajout des fichiers modifiés..."
git add .

echo "✍️ Saisis un message de commit :"
read message

git commit -m "$message"

echo "🚀 Envoi sur GitHub..."
git push origin main

echo "✅ Publication terminée ! Va sur : https://hannroy17.github.io/leo-games/"