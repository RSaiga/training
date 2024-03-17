import datetime
from dataclasses import dataclass


@dataclass
class Holiday:
  def is_christmas(self) -> bool:
    today = datetime.date.today()
    if today.month == 12 and today.day == 25:
      return True
    return False
