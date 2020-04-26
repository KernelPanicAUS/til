# Arch Linux: How to install an AUR package

Today I decided to try my hand at installing (cdr/code)[https://github.com/cdr/code-server], a vscode implementation in the browser,
so that I could use my iPad Pro for remote development.

Tailscale is a point-to-point VPN service I've recently discovered that allows anyone with an IDP account to create a mesh VPN,
and connect from any device that supports WireGuard.

To install Tailscale on my linux NUC, I followed the (instructions from the website)[https://tailscale.com/download/linux/arch], the first of which was to install
tailscale which was made available to Arch Linux users in the form of an AUR.

Installing an AUR package looks like this:
```bash
$ git clone https://aur.archlinux.org/tailscale.git /opt/
$ cd /opt/tailscale
$ makepkg -si
```

And from there, just follow the prompts!
