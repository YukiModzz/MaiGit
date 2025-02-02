#!bin/bash
GREEN='\033[1;32m'
BLUE='\033[0;34m'
clear
while : 
do
printf "${GREEN}︎ Mai 5.5.0 by: Yuki Mods
• Ativando System Supremacy!\n"
if [ "$1" = "sim" ]; then
node connect.js sim
elif [ "$1" = "não" ]; then
node connect.js não 
else 
node connect.js
fi
sleep 1 
printf "${BLUE}- O ︎programa fechado! Iniciando o projeto novamente, aguarde...\n"
done

