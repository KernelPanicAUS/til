# Packer: running PowerShell as admin

Sometimes you'll find yourself wanting to run some powershell to install windows updates,
only to have windows yell at you that you lack the necessary permissions

```
 Install-WindowsUpdate : Access is denied. (Exception from HRESULT: 0x80070005 (E_ACCESSDENIED))
```

A simple fix for this is to configure the packer provisioner to run as a windows admin user
```json
  {
      "type": "powershell",
      "elevated_user": "Administrator",
      "elevated_password": "{{.WinRMPassword}}",
      "inline": [
        "choco feature enable -n allowGlobalConfirmation",
        "if (!(test-path -path c:\\Script)) { New-Item -Path c:\\Script -ItemType Directory }",
        "Write-Output 'install PackageProvider NuGet'",
        "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12",
        "Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force -Verbose",
        "Write-Output 'installing Windows Updates'",
        "Install-Module PSWindowsUpdate -Confirm:$False -Force -Verbose",
        "Get-WindowsUpdate -AcceptAll  -WindowsUpdate -Verbose",
        "Install-WindowsUpdate -MicrosoftUpdate -AcceptAll -IgnoreReboot -Verbose"
      ]
  },
```
