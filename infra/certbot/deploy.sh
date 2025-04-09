#!/bin/sh
echo "[+] SSL certificate renewed. Reloading Nginx..."
docker exec nginx nginx -s reload
