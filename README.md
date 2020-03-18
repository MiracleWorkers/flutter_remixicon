# flutter_remixicon

Custom Flutter Icon by remixicon.

## Getting Started
```dart
import "package:flutter_remixicon/flutter_remixicon.dart";

Icon(
  MIcon.zoomOutFill,
  size: 30,
  color: Colors.yellow
)
```
> You can go to the [official website](https://remixicon.com/) to find the icon you want, and then use MIcon.iconName to get it; To prevent dart naming conflicts, the $ symbol is added before the icon name prefixed with a number, and then converted to a camel naming  
eg: 4k-fill => $4kFill;  account-box-fill => accountBoxFill;