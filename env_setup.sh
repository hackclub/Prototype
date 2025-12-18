# Part to of env setup script, run post-reboot

echo "export HSA_OVERRIDE_GFX_VERSION=11.0.0" >> ~/.bashrc
source ~/.bashrc

# Set up python environment
conda create -n lerobot python=3.10
conda activate lerobot
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/rocm6.3
pip list | grep rocm

printf "%s " "Check your packages match the docs!"
read ans

# Check for CUDA compatible device
python3 -c 'import torch; print(torch.cuda.is_available())'
python3 -c "import torch; print(f'device name [0]:', torch.cuda.get_device_name(0))"

printf "%s " "Should read True and list AMD Radeon Graphics"
read ans

# Set up LeRobot dev env
conda install ffmpeg=7.1.1 -c conda-forge
git clone https://github.com/huggingface/lerobot.git
cd lerobot
git checkout -b v0.4.1 v0.4.1
pip install -e .
pip list | grep lerobot
pip install 'lerobot[feetech]' 

echo "Basic setup to control the robot is done! Please see Prototype staff for training as this script does not cover it"
