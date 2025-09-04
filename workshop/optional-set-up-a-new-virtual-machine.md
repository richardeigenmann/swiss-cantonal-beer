# Optional preparation: Set up a new Virtual Machine

If you want to do this workshop in a completely empty, fresh environment you can follow this guide to set up a new virtual machine.
Here I set up a fresh Virtual Machine in virt-manager/QEMU/KVM and install all the required tools.

Since I like openSUSE Linux, let's get the ISO image for the Leap 15.6 release.

<https://get.opensuse.org/leap/15.6/#download>

I've picked the "Offline Image" as it installs faster. The Network image would also work.

![Screenshot of the OpenSuse distro download page](DownloadOpenSuseImage.png "Download openSUSE distro")

Next I open virt-manager on my current Linux Machine and create a new VM:

![Screenshot of virt-manager createing a new VM](CreateVirtualMachine.png "Create virtual machine")

I say to create the virtual machine from the downloaded ISO image.

![Pick the ISO Image as source](CreateVirtualMachineFromIso.png "Create virtual machine from ISO Image")

Skip through all the next screens But give the VM Something like 8GB or Ram and boot the virtual machine. In the boot menu choose "Installation"

![Boot the OpenSuse Intaller](BootInstallOpenSuse.png "Boot OpenSuse Installer")

Pick the correct keyboard layout and accept the license agreement:

![Pick Keyboard Layout and accept license agreement](PickKeyboardLayout.png "Pick Keyboard Layout and accept licence agreement")

Accept the Online Repositories question.

Accept the default list of Online Repositories.

Pick the Desktop with KDE Plasma.

Accept the defaults for Partitioning.

Pick the correct timezone.

Set up a username with a password.

Kick off the install.

It now boots up in openSuse Leap.

![OpenSuse Leap Desktop](OpenSuseLeapDesktop.png "OpenSuse Leap Desktop")

Get rid of the Welcome screen.

# Installation of VS Code, NodeJs and Angular


Open up a "Konsole: Root Shell" by clickin on the start menu and searching for "root". The password is that of the user you created with the virtual machine above.

![Open Root Shell Window](OpenRootShell.png "Open Root Shell")

```bash
# Add the VS Code repo
zypper addrepo https://packages.microsoft.com/yumrepos/vscode vscode

# Add the NodeJs repo
zypper addrepo https://download.opensuse.org/repositories/devel:languages:nodejs/15.6/devel:languages:nodejs.repo
```

![Add Repos](AddRepos.png "Add Repos")

Next we need to refresh the repos and accept the certificates

```bash
zypper refresh
```

![Refresh Repos](RefreshRepos.png "Refresh Repos")

Next we install VS Code, NodeJs22 and git:

```bash
zypper in code nodejs22 git
```

![Install VS Code and NodeJs](InstallVsCodeAndNodeJs.png "Install VS Code and NodeJs")
