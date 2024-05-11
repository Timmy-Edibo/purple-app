#!/bin/bash

ls -lrt
ls /var/www/react_app || true
rm -rf /var/www/react_app ||true
ls -l /var/www/
cp -r build /var/www/
mv /var/www/build /var/www/react_app
ls react_app
systemctl restart nginx && sudo systemctl daemon-reload