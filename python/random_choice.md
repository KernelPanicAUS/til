# Selecting a random choice from an array in Python

Given an array of subnet ids, I needed to obtain a randomised selection in order to distribute AMI builds across multiple subnets.

The following did the trick:

```python
import random

subnet_ids = ['subnet-1111', 'subnet-2222','subnet-3333']
random_subnet = random.choice(subnet_ids)
```
