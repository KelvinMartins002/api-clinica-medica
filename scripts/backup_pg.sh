#!/bin/bash

# CONFIGURAÇÕES DO BACKUP
DATA=$(date +"%Y-%m-%d_%H-%M")
BACKUP_DIR="/var/backups/clinicdb"
ARQUIVO="backup_clinicdb_$DATA.sql.gz"

# CREDENCIAIS DO BANCO
USUARIO="postgres"
BANCO="clinicdb"

# GARANTE QUE O DIRETÓRIO EXISTE
mkdir -p $BACKUP_DIR

# EXECUTA O BACKUP
pg_dump -U $USUARIO $BANCO | gzip > "$BACKUP_DIR/$ARQUIVO"

# REMOVE BACKUPS COM MAIS DE 7 DIAS
find $BACKUP_DIR -type f -mtime +7 -name "*.gz" -exec rm {} \;

# LOG DO BACKUP
echo "Backup realizado em $DATA: $ARQUIVO" >> /var/log/clinicdb_backup.log
