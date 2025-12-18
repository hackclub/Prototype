#!/bin/sh

# Get system info

echo "DO NOT RUN THIS SCRIPT YOU ARE ON THE AMD LAPTOPS. HIT CTRL-C TO EXIT"
echo "System info"
lsb_release -a
uname -r
lsmod | grep amdgpu
printf "%s " "Press enter to continue!"
read ans

# Install sys packages
sudo apt update
sudo apt install "linux-headers-$(uname -r)" "linux-modules-extra-$(uname -r)"
sudo apt install python3-setuptools python3-wheel
sudo usermod -a -G render,video $LOGNAME
wget https://repo.radeon.com/amdgpu-install/6.3.4/ubuntu/noble/amdgpu-install_6.3.60304-1_all.deb
sudo apt install ./amdgpu-install_6.3.60304-1_all.deb
amdgpu-install -y --usecase=rocm --no-dkms
sudo reboot now