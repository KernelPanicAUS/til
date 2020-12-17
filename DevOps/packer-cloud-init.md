# Packer: apt lock race condition

When running a packer build, you could find yourself in the situation where dpkg or apt is locked by another process.
In this case, installing packages will fail due to the process's inability to acquire the lock and will fail the AMI build.
To get around this, you should add a shell provisioner which will wait for `cloud-init` to finish before proceeding with the subsequent provisioner.

```hcl
  provisioner "shell" {
    inline = ["/usr/bin/cloud-init status --wait"]
  }
```

```json
  {
     "type": "shell",
     "inline": ["/usr/bin/cloud-init status --wait"]
  },
```
