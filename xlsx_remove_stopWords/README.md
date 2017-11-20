Remove stop Words
========

Estrae tutte le celle di una colonna data e rimuove tutte le parole inserite ina una stop world list.
Extract text from cells in a given column and remove all the words of a stop world list.

Created by hold3n on 18/11/2017.
    
Piccolo script per ripulire dalle stop-words una colonna di excel contenente del testo.
Lo script è sporco e lento, ma funziona.

INFO
-----
    
- INPUT: file xlsx  and given column
- OUTPUT: file xlsx and elaborated column
- usage: remove_stopWord.py [-h] [-o FILE_OUT] [-e] [-p] file_in column

```positional arguments:
  file_in               specify file in
  column                specify column to elaborate

optional arguments:
  -h, --help            show this help message and exit
  -o FILE_OUT, --file_out FILE_OUT
                        specify file out, if missing will be file-cleared
  -e, --elaborate       force elaborate data, otherwise it's just a preview
  -p, --pipe_exp        write a pipe between words
  ```


HOWTO
-----

- Install dependencies:

```bash
    pip install -r requirements.txt
```

Problemi conosciuti
-----

- il file esportato ha qualche problema con excel di office, ma viene aperto senza problemi da open Refine.


-----
Copyright (C) 2017  Daniele Iori aka _hold3n <http://ibridodesign.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
