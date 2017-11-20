wordcounter & lettercounter
========

Created by hold3n on 20/02/14.
    
Piccolo script che analizza un file txt e conta ed elenca tutte le parole utilizzate nel testo 
(lettercounter conta e analizza le lettere).
Lo script sfrutta node.js per essere eseguito da riga di comando.
Utilizza il modulo specifico file sistem di node che consente di accedere al file system.

*-------------------------------------------------------------------------------------
    
INPUT: file di testo txt  
OUTPUT: elenco quantificato di parole in ordine alfabetico o di quantità

*-------------------------------------------------------------------------------------


PROBLEMI CONOSCIUTI: l'ordine per quantità non è preciso, perché il sistema effettua un 
ordinamento alfabetico sulla stringa "numero". Va corretto.


Copyright (C) 2014  Daniele Iori aka _hold3n <http://ibridodesign.com>

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
