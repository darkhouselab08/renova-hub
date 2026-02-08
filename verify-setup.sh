#!/bin/bash

# 🔍 Script de Verificación - Renova Hub
# Este script verifica que todo esté configurado correctamente

echo "🔍 Verificando configuración de Renova Hub..."
echo ""

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para verificar
check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1"
        return 1
    fi
}

# 1. Verificar directorio del proyecto
echo "📁 Verificando directorio del proyecto..."
if [ -d "/Users/jorgefranco/Documents/Cursos/renova-hub" ]; then
    check "Directorio del proyecto existe"
else
    echo -e "${RED}✗${NC} Directorio del proyecto NO encontrado"
    exit 1
fi

# 2. Verificar Git
echo ""
echo "🔗 Verificando configuración de Git..."
cd /Users/jorgefranco/Documents/Cursos/renova-hub
git remote -v > /dev/null 2>&1
check "Repositorio Git configurado"

# 3. Verificar Node.js
echo ""
echo "📦 Verificando Node.js..."
node -v > /dev/null 2>&1
check "Node.js instalado: $(node -v)"

# 4. Verificar NPM
npm -v > /dev/null 2>&1
check "NPM instalado: $(npm -v)"

# 5. Verificar dependencias
echo ""
echo "📚 Verificando dependencias..."
if [ -d "node_modules" ]; then
    check "Dependencias instaladas"
else
    echo -e "${YELLOW}⚠${NC} Dependencias no instaladas. Ejecuta: npm install"
fi

# 6. Verificar archivos clave
echo ""
echo "📄 Verificando archivos clave..."
[ -f "package.json" ] && check "package.json existe"
[ -f "next.config.ts" ] && check "next.config.ts existe"
[ -f "tailwind.config.ts" ] && check "tailwind.config.ts existe"

# 7. Verificar alias
echo ""
echo "⚡ Verificando alias..."
if alias rh > /dev/null 2>&1; then
    check "Alias 'rh' configurado"
else
    echo -e "${YELLOW}⚠${NC} Alias no cargados. Ejecuta: source ~/.zshrc"
fi

# 8. Verificar Antigravity
echo ""
echo "🤖 Verificando Antigravity..."
if command -v antigravity > /dev/null 2>&1; then
    check "Antigravity instalado"
else
    echo -e "${YELLOW}⚠${NC} Antigravity no encontrado en PATH"
fi

# Resumen
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}✓ Verificación completada${NC}"
echo ""
echo "🚀 Comandos rápidos disponibles:"
echo "   rh        - Ir al proyecto"
echo "   rhdev     - Iniciar servidor de desarrollo"
echo "   rhstatus  - Ver estado del proyecto"
echo ""
echo "Para más información, consulta la guía de workflow."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
