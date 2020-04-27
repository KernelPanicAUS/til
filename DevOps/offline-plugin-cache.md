# Terraform offline plugin cache

When working on big projects in terraform with many compositions,
initialising every composition means Terraform will re-download all provider and plugin binaries for each composition.

Setting the following environment variables allows Terraform to store plugin binaries in a centralised location in your filesystem, in turn freeing up your precious disk space.

```bash
export TF_PLUGIN_CACHE_DIR="$HOME/.terraform.d/plugin-cache"
```
