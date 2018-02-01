from views import app as main
import os
import sys
from storage import Storage

storage = Storage()

if __name__ == "__main__":
    main.app.run(debug=False)
