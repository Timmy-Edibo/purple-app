#!/bin/bash

ls -lrt
ls /var/www/react_app || true
sudo rm -rf /var/www/react_app ||true
ls -l /var/www/
sudo cp -r build /var/www/
sudo mv /var/www/build /var/www/react_app
sudo systemctl restart nginx && sudo systemctl daemon-reload