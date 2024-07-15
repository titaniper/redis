
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


brew install redis

```
KEYS *
GET key
127.0.0.1:6379> SET KEY3 va
OK
127.0.0.1:6379> GET KEY3
"va"
```