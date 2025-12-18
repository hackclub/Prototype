![Prototype Banner](assets/AMD_HackClub_Prototype_Banner.png)

In this challenge, participants are invited to form teams of 3 to build awesome projects with using Hugging Face LeRobot.

# Guide for SO-101 setup

1. QuickStart for setting up LeRobot Development Environment with AMD Edge ROCm platform.

    [QuickStart.md](QuickStart.md)

_Having issues? You can also set this up by running the following commands:_

```
curl https://raw.githubusercontent.com/hackclub/Prototype/refs/heads/main/sys_setup.sh | bash
```

_This will install some firmware and reboot your system. Afterwards, run:_

```
curl https://raw.githubusercontent.com/hackclub/Prototype/refs/heads/main/env_setup.sh | bash
```

2. Request a training environment with an AMD MI300X GPU by going to the provided link (link will only be available during the Hackathon and requires authorization).
   The process will take a few minutes to provision the GPU instance and open a [Jupyter Notebook](training-models-on-rocm.ipynb) for environment configuration and model training.

3. Check the guide to set up the robot ARMs:

    [so101_example.md](so101_example.md)

4. Example template GitHub Repo to commit your work

    [AMD_Robotics_Hackathon_2025_ProjectTemplate](https://github.com/AlexHe99/AMD_Robotics_Hackathon_2025_ProjectTemplate)
