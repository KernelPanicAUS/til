# Packer: using spot instances for AMI building

Today I found a cool feature of Packer, where you can use spot fleets for AMI building.
The fleet function allows me the flexibility of getting builds done very cheaply,
without worrying about lack of instance capacity in a given acailability zone.

```json
"spot_price": "auto",
"spot_instance_types": [
  "m5a.large",
  "m5.large",
  "m5a.xlarge",
  "m5.xlarge"
],
```
