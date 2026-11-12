// ============================================================================
// HÀM TIỆN ÍCH ESCAPE CHUỖI AN TOÀN (TRÁNH LỖI DẤU NHÁY ĐƠN Ở TÊN CẦU THỦ/CLB)
// ============================================================================
function escAttr(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// ============================================================================
// 1. DỮ LIỆU GỐC ĐẦY ĐỦ 130 CÂU LẠC BỘ & ĐỘI HÌNH RA SÂN CHÍNH 11 CẦU THỦ
// ============================================================================
const RAW_LEAGUES_DATA = [
    {
        id: 'premier-league',
        name: 'Premier League (Ngoại Hạng Anh)',
        shortName: 'Premier League',
        country: 'Anh',
        badge: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
        color: 'from-purple-600 to-indigo-700',
        teams: [
            { name: 'ARSENAL FC', formation: '4-3-1-2', players: ['David Raya (22 GK)', 'William Saliba (2 CB)', 'G. Magalhães (6 CB)', 'J. Timber (14 RB)', 'K. Tierney (3 LB)', 'Declan Rice (41 DMF)', 'Vieira (4 CMF)', 'Sterling (10 CMF)', 'Ødegaard (8 AMF)', 'T. Henry (12 CF)', 'Gabriel Jesus (1 CF)'] },
            { name: 'ASTON VILLA', formation: '4-4-1-1', players: ['E. Martínez (1 GK)', 'Kortney Hause (30 CB)', 'Pau Torres (17 CB)', 'Matty Cash (2 RB)', 'Lucas Digne (12 LB)', 'Tielemans (8 DMF)', 'A. Onana (24 DMF)', 'David Ginola (14 RMF)', 'Ross Barkley (6 LMF)', 'P. Coutinho (11 AMF)', 'O. Watkins (15 CF)'] },
            { name: 'AFC BOURNEMOUTH', formation: '4-4-1-1', players: ['Kepa (13 GK)', 'I. Zabarnyi (27 CB)', 'B. Badiashile (5 CB)', 'Adam Smith (15 RB)', 'Milos Kerkez (3 LB)', 'Lewis Cook (4 DMF)', 'Tyler Adams (18 DMF)', 'M. Tavernier (16 RMF)', 'J. Kluivert (19 LMF)', 'Robinho (10 AMF)', 'Enes Ünal (26 CF)'] },
            { name: 'BRENTFORD', formation: '4-3-3', players: ['Mark Flekken (GK)', 'Mads Roerslev (RB)', 'Nathan Collins (CB)', 'Ethan Pinnock (CB)', 'Keane Lewis-Potter (LB)', 'Mikkel Damsgaard (CMF)', 'Vitaly Janelt (CMF)', 'Christian Nørgaard (CMF)', 'Bryan Mbeumo (RW)', 'Yoane Wissa (ST)', 'Kevin Schade (LW)'] },
            { name: 'BRIGHTON & HOVE ALBION', formation: '4-2-3-1', players: ['Bart Verbruggen (GK)', 'Joël Veltman (RB)', 'Jan Paul van Hecke (CB)', 'Lewis Dunk (CB)', 'Pervis Estupiñán (LB)', 'Carlos Baleba (DMF)', 'Mats Wieffer (DMF)', 'Yankuba Minteh (RW)', 'João Pedro (AM)', 'Kaoru Mitoma (LW)', 'Danny Welbeck (ST)'] },
            { name: 'CHELSEA FC', formation: '4-5-1', players: ['Čech (1 GK)', 'Marcel Desailly (26 CB)', 'Terry (22 CB)', 'Reece James (24 RB)', 'Ashley Cole (2 LB)', 'Michael Essien (6 DMF)', 'Frank Lampard (8 CMF)', 'Ballack (13 CMF)', 'Hazard (17 RMF)', 'J. Sancho (19 LMF)', 'Drogba (9 CF)'] },
            { name: 'CRYSTAL PALACE', formation: '3-4-2-1', players: ['Dean Henderson (GK)', 'Trevoh Chalobah (CB)', 'Marc Guéhi (CB)', 'Maxence Lacroix (CB)', 'Daniel Muñoz (RWB)', 'Adam Wharton (CMF)', 'Cheick Doucouré (CMF)', 'Tyrick Mitchell (LWB)', 'Ismaïla Sarr (RAM)', 'Eberechi Eze (LAM)', 'Jean-Philippe Mateta (ST)'] },
            { name: 'EVERTON FC', formation: '4-4-1-1', players: ['Pickford (1 GK)', 'Michael Keane (5 CB)', 'Materazzi (3 CB)', 'Coleman (23 RB)', 'Ashley Young (18 LB)', 'James Garner (37 DMF)', 'Tim Iroegbunam (42 DMF)', 'Donovan (10 RMF)', 'Idrissa Gueye (27 LMF)', 'Tim Cahill (17 AMF)', 'Chermiti (28 CF)'] },
            { name: 'FULHAM FC', formation: '4-4-1-1', players: ['Bernd Leno (1 GK)', 'Issa Diop (31 CB)', 'C. Bassey (3 CB)', 'Kenny Tete (2 RB)', 'R. Sessegnon (30 LB)', 'Harrison Reed (6 DMF)', 'Sander Berge (16 DMF)', 'Reiss Nelson (24 RMF)', 'Adama Traoré (11 LMF)', 'Eriksen (4 AMF)', 'Dempsey (10 CF)'] },
            { name: 'IPSWICH TOWN', formation: '4-2-3-1', players: ['Arijanet Muric (GK)', 'Axel Tuanzebe (RB)', "Dara O'Shea (CB)", 'Jacob Greaves (CB)', 'Leif Davis (LB)', 'Sam Morsy (DMF)', 'Kalvin Phillips (DMF)', 'Chiedozie Ogbene (RW)', 'Omari Hutchinson (AM)', 'Sammie Szmodics (LW)', 'Liam Delap (ST)'] },
            { name: 'LEICESTER CITY', formation: '4-4-1-1', players: ['Gordon Banks (1 GK)', 'Caleb Okoli (5 CB)', 'Wout Faes (3 CB)', 'Vestergaard (23 RB)', 'James Justin (2 LB)', 'H. Winks (8 DMF)', 'H. Choudhury (17 DMF)', 'Bobby Reid (14 RMF)', 'Jordan Ayew (13 LMF)', 'F. Buonanotte (47 AMF)', 'J. Vardy (9 CF)'] },
            { name: 'LIVERPOOL FC', formation: '4-3-3', players: ['Alisson (1 GK)', 'Carragher (6 CB)', 'V. Van Dijk (4 CB)', 'T. A. Arnold (66 RB)', 'Riise (3 LB)', 'Xabi Alonso (14 CMF)', 'Gerrard (8 CMF)', 'D. Szoboszlai (16 CMF)', 'Luis Díaz (7 RWF)', 'Mohamed Salah (11 LWF)', 'F. Torres (9 CF)'] },
            { name: 'MANCHESTER CITY', formation: '4-4-1-1', players: ['G. Donnarumma (99 GK)', 'Rúben Dias (7 CB)', 'Vincent Kompany (3 CB)', 'K. Walker (2 RB)', 'J. Gvardiol (24 LB)', 'Rodri (16 DMF)', 'Touré Yaya (4 DMF)', 'Bernardo Silva (20 RMF)', 'Phil Foden (47 LMF)', 'De Bruyne (17 AMF)', 'E. Haaland (9 CF)'] },
            { name: 'MANCHESTER UNITED', formation: '4-4-1-1', players: ['Van Der Sar (1 GK)', 'N. Vidic (15 CB)', 'Ferdinand (5 CB)', 'Denis Irwin (3 RB)', 'G. Neville (2 LB)', 'Scholes (18 CMF)', 'Best (17 RMF)', 'Giggs (11 LMF)', 'Roy Keane (16 CMF)', 'Bobby Charlton (9 AMF)', 'Cristiano Ronaldo (7 CF)'] },
            { name: 'NEWCASTLE UNITED', formation: '4-3-3', players: ['Nick Pope (22 GK)', 'Lascelles (6 CB)', 'Dan Burn (33 CB)', 'K. Trippier (2 RB)', 'Lewis Hall (20 LB)', 'B. Guimarães (39 DMF)', 'Sandro Tonali (8 CMF)', 'Miguel Almirón (24 CMF)', 'Andy Cole (11 RWF)', 'Alexander Isak (14 LWF)', 'Ian Rush (7 CF)'] },
            { name: 'NOTTINGHAM FOREST', formation: '4-4-1-1', players: ['Altay Bayindir (24 GK)', 'N. Milenković (17 CB)', 'Harry Toffolo (15 CB)', 'N. Williams (7 RB)', 'Alex Moreno (13 LB)', 'N. Domínguez (16 DMF)', 'Danilo (28 DMF)', 'Ward-Prowse (19 RMF)', 'A. Elanga (21 LMF)', 'M. Gibbs-White (26 AMF)', 'Sheringham (10 CF)'] },
            { name: 'SOUTHAMPTON FC', formation: '3-5-2', players: ['Alex McCarthy (1 GK)', 'J. Bednarek (35 CB)', 'Harwood-Bellis (21 CB)', 'Ronnie Edwards (6 CB)', 'Flynn Downes (4 DMF)', 'Lallana (8 RWB)', 'Walker-Peters (2 LWB)', 'Will Smallbone (16 CMF)', 'Carlos Alcaraz (22 CMF)', 'Ben Brereton (26 CF)', 'Puskas (10 CF)'] },
            { name: 'TOTTENHAM HOTSPUR', formation: '4-3-3', players: ['Guglielmo Vicario (GK)', 'Pedro Porro (RB)', 'Cristian Romero (CB)', 'Micky van de Ven (CB)', 'Destiny Udogie (LB)', 'Yves Bissouma (CMF)', 'Pape Matar Sarr (CMF)', 'James Maddison (CMF)', 'Dejan Kulusevski (RW)', 'Dominic Solanke (ST)', 'Son Heung-min (LW)'] },
            { name: 'WEST HAM UNITED', formation: '4-2-3-1', players: ['Alphonse Areola (GK)', 'Aaron Wan-Bissaka (RB)', 'Jean-Clair Todibo (CB)', 'Max Kilman (CB)', 'Emerson Palmieri (LB)', 'Edson Álvarez (DMF)', 'Tomáš Souček (DMF)', 'Jarrod Bowen (RW)', 'Lucas Paquetá (AM)', 'Mohammed Kudus (LW)', 'Niclas Füllkrug (ST)'] },
            { name: 'WOLVERHAMPTON WANDERERS', formation: '3-5-2', players: ['Tom King (40 GK)', 'Santiago Bueno (4 CB)', 'Y. Mosquera (14 CB)', 'C. Dawson (15 CB)', 'Joe Hodge (32 DMF)', 'Mario Lemina (5 CMF)', 'P. Sarabia (21 CMF)', 'Rodrigo Gomes (19 RMF)', 'G. Guedes (13 LMF)', 'Matheus Cunha (10 CF)', 'S. Kalajdzic (18 CF)'] }
        ]
    },
    {
        id: 'la-liga',
        name: 'La Liga (VĐQG Tây Ban Nha)',
        shortName: 'La Liga',
        country: 'Tây Ban Nha',
        badge: '🇪🇸',
        color: 'from-rose-600 to-amber-600',
        teams: [
            { name: 'RCD ESPANYOL', formation: '4-4-2', players: ['Joan García (GK)', 'Omar El Hilali (RB)', 'Leandro Cabrera (CB)', 'Sergi Gómez (CB)', 'Carlos Romero (LB)', 'Álvaro Aguado (CMF)', 'Pol Lozano (CMF)', 'Jofre Carreras (RMF)', 'Kral (LMF)', 'Javi Puado (CF)', 'Veliz (CF)'] },
            { name: 'ATHLETIC CLUB (BILBAO)', formation: '4-2-3-1', players: ['Unai Simón (GK)', 'Óscar de Marcos (RB)', 'Dani Vivian (CB)', 'Yeray Álvarez (CB)', 'Yuri Berchiche (LB)', 'Mikel Jauregizar (DMF)', 'Ruiz de Galarreta (DMF)', 'Iñaki Williams (RW)', 'Oihan Sancet (AM)', 'Nico Williams (LW)', 'Gorka Guruzeta (ST)'] },
            { name: 'ATLÉTICO MADRID', formation: '3-4-2-1', players: ['Jan Oblak (13 GK)', 'Axel Witsel (20 CB)', 'Azpilicueta (3 CB)', 'J. Giménez (2 CB)', 'Simeone (28 DMF)', 'Koke (6 DMF)', 'Nahuel Molina (16 RWB)', 'Faulo Futre (17 LWB)', 'M. Llorente (14 AMF)', 'Griezzmann (25 AMF)', 'Raúl (7 CF)'] },
            { name: 'FC BARCELONA', formation: '4-2-1-3', players: ['Ter Stegen (1 GK)', 'Pau Cubarsí (2 CB)', 'Koeman (5 CB)', 'Puyol (6 RB)', 'Álex Balde (3 LB)', 'Xavi (22 CMF)', 'A. Iniesta (25 CMF)', 'Rivaldo (11 AMF)', 'Stoichkov (30 LWF)', 'Ronaldinho (10 RWF)', "Eto'o (9 CF)"] },
            { name: 'CD LEGANÉS', formation: '5-3-2', players: ['Marko Dmitrović (GK)', 'Valentin Rosier (RWB)', 'Adrià Altimira (CB)', 'Sergio González (CB)', 'Matija Nastasić (CB)', 'Javi Hernández (LWB)', 'Renato Tapia (CMF)', 'Seydouba Cissé (CMF)', 'Dani Raba (CMF)', 'Juan Cruz (CF)', 'Miguel de la Fuente (CF)'] },
            { name: 'CELTA VIGO', formation: '3-4-2-1', players: ['Vicente Guaita (GK)', 'Javier Manquillo (CB)', 'Carl Starfelt (CB)', 'Marcos Alonso (CB)', 'Óscar Mingueza (RWB)', 'Ilaix Moriba (CMF)', 'Fran Beltrán (CMF)', 'Hugo Álvarez (LWB)', 'Iago Aspas (RAM)', 'Williot Swedberg (LAM)', 'Borja Iglesias (ST)'] },
            { name: 'REAL BETIS', formation: '4-4-1-1', players: ['Rui Silva (13 GK)', 'D. Llorente (3 CB)', 'Marc Bartra (5 CB)', 'H. Bellerín (2 RB)', 'R. Rodríguez (12 LB)', 'W. Carvalho (14 DMF)', 'G. Lo Celso (20 DMF)', 'Ez Abde (10 RMF)', 'Antony (7 LMF)', 'Isco (22 AMF)', 'Vitor Roque (8 CF)'] },
            { name: 'DEPORTIVO ALAVÉS', formation: '4-2-3-1', players: ['Antonio Sivera (GK)', 'Nahuel Tenaglia (RB)', 'Abdel Abqar (CB)', 'Aleksandar Sedlar (CB)', 'Manu Sánchez (LB)', 'Antonio Blanco (DMF)', 'Ander Guevara (DMF)', 'Carlos Vicente (RW)', 'Jon Guridi (AM)', 'Carlos Martín (LW)', 'Kike García (ST)'] },
            { name: 'GIRONA FC', formation: '4-2-3-1', players: ['Paulo Gazzaniga (GK)', 'Arnau Martínez (RB)', 'David López (CB)', 'Daley Blind (CB)', 'Miguel Gutiérrez (LB)', 'Yangel Herrera (DMF)', 'Iván Martín (DMF)', 'Viktor Tsygankov (RW)', 'Donny van de Beek (AM)', 'Bryan Gil (LW)', 'Abel Ruiz (ST)'] },
            { name: 'REAL VALLADOLID', formation: '4-3-3', players: ['Karl Hein (GK)', 'Luis Pérez (RB)', 'Javi Sánchez (CB)', 'David Torres (CB)', 'Lucas Rosa (LB)', 'Stanko Jurić (CMF)', 'Mario Martín (CMF)', 'Kike Pérez (CMF)', 'Amath Ndiaye (RW)', 'Juanmi Latasa (ST)', 'Raul Moro (LW)'] },
            { name: 'UD LAS PALMAS', formation: '4-2-3-1', players: ['Jasper Cillessen (GK)', 'Álex Suárez (RB)', 'Juanma Herzog (CB)', 'Scott McKenna (CB)', 'Álex Muñoz (LB)', 'Dario Essugo (DMF)', 'Kirian Rodríguez (DMF)', 'Adnan Januzaj (RW)', 'Alberto Moleiro (AM)', 'Sandro Ramírez (LW)', 'Oli McBurnie (ST)'] },
            { name: 'RCD MALLORCA', formation: '4-4-2', players: ['Dominik Greif (GK)', 'Pablo Maffeo (RB)', 'Martin Valjent (CB)', 'Antonio Raíllo (CB)', 'Johan Mojica (LB)', 'Robert Navarro (RMF)', 'Samú Costa (CMF)', 'Sergi Darder (CMF)', 'Dani Rodríguez (LMF)', 'Cyle Larin (CF)', 'Vedat Muriqi (CF)'] },
            { name: 'CA OSASUNA', formation: '4-3-3', players: ['Sergio Herrera (GK)', 'Jesús Areso (RB)', 'Alejandro Catena (CB)', 'Flavien Boyomo (CB)', 'Abel Bretones (LB)', 'Jon Moncayola (CMF)', 'Lucas Torró (CMF)', 'Aimar Oroz (CMF)', 'Rubén Peña (RW)', 'Ante Budimir (ST)', 'Bryan Zaragoza (LW)'] },
            { name: 'GETAFE CF', formation: '4-4-2', players: ['David Soria (GK)', 'Juan Iglesias (RB)', 'Dene Djené (CB)', 'Omar Alderete (CB)', 'Diego Rico (LB)', 'Carles Pérez (RMF)', 'Mauro Arambarri (CMF)', 'Luis Milla (CMF)', 'Álex Sola (LMF)', 'Bertug Yildirim (CF)', 'Christantus Uche (CF)'] },
            { name: 'REAL MADRID CF', formation: '4-1-2-3', players: ['Casillas (1 GK)', 'R. Varane (10 CB)', 'Sergio Ramos (27 CB)', 'Míchel Salgado (31 RB)', 'Roberto Carlos (6 LB)', 'Tchouaméni (14 DMF)', 'Kaká (8 AMF)', 'Zidane (5 AMF)', 'K. Mbappé (7 RWF)', 'Gareth Bale (11 LWF)', 'Ronaldo (9 CF)'] },
            { name: 'REAL SOCIEDAD', formation: '4-3-3', players: ['Alex Remiro (GK)', 'Hamari Traoré (RB)', 'Igor Zubeldia (CB)', 'Nayef Aguerd (CB)', 'Javi López (LB)', 'Brais Méndez (CMF)', 'Martín Zubimendi (CMF)', 'Luka Sučić (CMF)', 'Takefusa Kubo (RW)', 'Mikel Oyarzabal (ST)', 'Sergio Gómez (LW)'] },
            { name: 'SEVILLA FC', formation: '4-5-1', players: ['Örjan Nyland (13 GK)', 'T. Nianzou (24 CB)', 'Loïc Badé (22 CB)', 'Jesús Navas (16 RB)', 'Valentín Barco (19 LB)', 'Nemanja Gudelj (6 DMF)', 'Djibril Sow (20 CMF)', 'Pedro Ortiz (8 CMF)', 'Suso (10 RMF)', 'Saúl Ñíguez (17 LMF)', 'Suker (5 CF)'] },
            { name: 'VALENCIA CF', formation: '4-4-2', players: ['Giorgi Mamardashvili (GK)', 'Dimitri Foulquier (RB)', 'Cristhian Mosquera (CB)', 'César Tárrega (CB)', 'Jesús Vázquez (LB)', 'Diego López (RMF)', 'Pepelu (CMF)', 'Javi Guerra (CMF)', 'Luis Rioja (LMF)', 'Dani Gómez (CF)', 'Hugo Duro (CF)'] },
            { name: 'RAYO VALLECANO', formation: '4-4-2', players: ['Augusto Batalla (GK)', 'Andrei Rațiu (RB)', 'Abdul Mumin (CB)', 'Florian Lejeune (CB)', 'Pep Chavarría (LB)', 'Jorge de Frutos (RMF)', 'Unai López (CMF)', 'Óscar Valentín (CMF)', 'Adrián Embarba (LMF)', 'Sergio Camello (CF)', 'Isi Palazón (CF)'] },
            { name: 'VILLARREAL CF', formation: '4-4-2', players: ['Diego Conde (GK)', 'Kiko Femenía (RB)', 'Raúl Albiol (CB)', 'Logan Costa (CB)', 'Sergi Cardona (LB)', 'Yeremy Pino (RMF)', 'Dani Parejo (CMF)', 'Pape Gueye (CMF)', 'Alex Baena (LMF)', 'Nicolas Pépé (CF)', 'Ayoze Pérez (CF)'] }
        ]
    },
    {
        id: 'serie-a',
        name: 'Serie A (VĐQG Ý)',
        shortName: 'Serie A',
        country: 'Ý',
        badge: '🇮🇹',
        color: 'from-sky-600 to-blue-800',
        teams: [
            { name: 'ATALANTA BC', formation: '3-4-2-1', players: ['Marco Carnesecchi (GK)', 'Berat Djimsiti (CB)', 'Isak Hien (CB)', 'Sead Kolašinac (CB)', 'Raoul Bellanova (RWB)', 'Mario Pašalić (CM)', 'Éderson (CM)', 'Matteo Ruggeri (LWB)', 'Charles De Ketelaere (RAM)', 'Ademola Lookman (LAM)', 'Mateo Retegui (ST)'] },
            { name: 'BOLOGNA FC 1909', formation: '4-2-3-1', players: ['Łukasz Skorupski (GK)', 'Stefan Posch (RB)', 'Sam Beukema (CB)', 'Jhon Lucumí (CB)', 'Charalampos Lykogiannis (LB)', 'Remo Freuler (DMF)', 'Tommaso Pobega (DMF)', 'Riccardo Orsolini (RW)', 'Jens Odgaard (AM)', 'Dan Ndoye (LW)', 'Santiago Castro (ST)'] },
            { name: 'CAGLIARI CALCIO', formation: '3-5-2', players: ['Simone Scuffet (GK)', 'Gabriele Zappa (RB)', 'Yerry Mina (CB)', 'Sebastiano Luperto (CB)', 'Tommaso Augello (LB)', 'Nadir Zortea (RMF)', 'Antoine Makoumbou (CMF)', 'Răzvan Marin (CMF)', 'Michel Adopo (LMF)', 'Zito Luvumbo (SS)', 'Roberto Piccoli (ST)'] },
            { name: 'COMO 1907', formation: '4-4-2', players: ['Pepe Reina (25 GK)', 'Alberto Dossena (13 CB)', 'E. Goldaniga (5 CB)', 'Sergi Roberto (20 RB)', 'Sergi (2 LB)', 'Y. Engelhardt (26 DMF)', 'M. Oliver Kempf (9 DMF)', 'G. Strefezza (7 RMF)', 'Alberto Moreno (18 LMF)', 'Andrea Belotti (11 CF)', 'Nico Paz (79 CF)'] },
            { name: 'HELLAS VERONA FC', formation: '4-2-3-1', players: ['Lorenzo Montipò (GK)', 'Jackson Tchatchoua (RB)', 'Giangiacomo Magnani (CB)', 'Diego Coppola (CB)', 'Domagoj Bradarić (LB)', 'Ondrej Duda (DMF)', 'Suat Serdar (DMF)', 'Tomáš Suslov (RW)', 'Reda Belahyane (AM)', 'Darko Lazović (LW)', 'Casper Tengstedt (ST)'] },
            { name: 'ACF FIORENTINA', formation: '4-4-1-1', players: ['De Gea (13 GK)', 'M. Quarta (28 CB)', 'Pietro Comuzzo (37 CB)', 'F. Parisi (65 RB)', 'C. Biraghi (3 LB)', 'Amor (10 DMF)', 'S. Amrabat (6 DMF)', 'Maxime López (8 RMF)', 'Bonaventura (5 LMF)', 'Nakata (22 AMF)', 'Moise Kean (15 CF)'] },
            { name: 'US LECCE', formation: '4-2-3-1', players: ['Wladimiro Falcone (GK)', 'Frédéric Guilbert (RB)', 'Kialonda Gaspar (CB)', 'Federico Baschirotto (CB)', 'Antonino Gallo (LB)', 'Ylber Ramadani (DMF)', 'Balthazar Pierret (DMF)', 'Hamza Rafia (AMF)', 'Patrick Dorgu (RW)', 'Nikola Krstović (ST)', 'Lameck Banda (LW)'] },
            { name: 'INTER MILAN', formation: '3-5-2', players: ['Toldo (1 GK)', 'Montero (25 CB)', 'L. Blanc (6 CB)', 'De Vrij (14 CB)', 'Çalhanoglu (20 DMF)', 'Sneijder (10 CMF)', 'Mkhitaryan (22 CMF)', 'Javier Zanetti (4 RMF)', 'Hulk (19 LMF)', 'Crespo (9 CF)', 'Adriano (7 CF)'] },
            { name: 'JUVENTUS F.C.', formation: '4-4-1-1', players: ['Buffon (1 GK)', 'Chiellini (13 CB)', 'Barzagli (24 CB)', 'Thuram (23 RB)', 'Danilo (6 LB)', 'Paul Pogba (40 DMF)', 'M. Locatelli (5 DMF)', 'Del Piero (8 RMF)', 'Nedved (11 LMF)', 'Roberto Baggio (10 AMF)', 'F. Inzaghi (9 CF)'] },
            { name: 'S.S. LAZIO', formation: '4-3-3', players: ['I. Provedel (94 GK)', 'A. Romagnoli (13 CB)', 'Nicoló Casale (15 CB)', 'N. Tavares (1 RB)', 'Lichtsteiner (12 LB)', 'Guendouzi (8 DMF)', 'Veron (6 CMF)', 'Maradona (10 CMF)', 'Immobile (17 RWF)', 'Pedro (9 LWF)', 'Boksic (11 CF)'] },
            { name: 'EMPOLI FC', formation: '3-5-2', players: ['Devis Vásquez (GK)', 'Mattia De Sciglio (CB)', 'Ardian Ismajli (CB)', 'Mattia Viti (CB)', 'Emmanuel Gyasi (RWB)', 'Liam Henderson (CM)', 'Alberto Grassi (CM)', 'Jacopo Fazzini (CM)', 'Giuseppe Pezzella (LWB)', 'Sebastiano Esposito (SS)', 'Lorenzo Colombo (ST)'] },
            { name: 'A.C. MILAN', formation: '4-3-1-2', players: ['Dida (1 GK)', 'Nesta (15 CB)', 'Franco Baresi (3 CB)', 'Cafu (2 RB)', 'P. Maldini (25 LB)', 'Frank Rijkaard (6 DMF)', 'C. Seedorf (10 CMF)', 'Pirlo (21 CMF)', 'Gullit (5 AMF)', 'Shevchenko (7 CF)', 'van Basten (9 CF)'] },
            { name: 'S.S.C. NAPOLI', formation: '3-4-2-1', players: ['Alex Meret (1 GK)', 'A. Buongiorno (4 CB)', 'M. Gabbia (2 CB)', 'Juan Jesus (5 CB)', 'Zambo Anguissa (99 DMF)', 'S. Mctominay (8 DMF)', 'Ayala (3 RWB)', 'David Neres (15 LWB)', 'Neymar (10 AMF)', 'Zola (7 AMF)', 'V. Osimhen (9 CF)'] },
            { name: 'PARMA CALCIO 1913', formation: '4-2-3-1', players: ['Zion Suzuki (GK)', 'Woyo Coulibaly (RB)', 'Enrico Delprato (CB)', 'Botond Balogh (CB)', 'Emanuele Valeri (LB)', 'Adrián Bernabé (DMF)', 'Mandela Keita (DMF)', 'Dennis Man (RW)', 'Hernani (AM)', 'Matteo Cancellieri (LW)', 'Ange-Yoan Bonny (ST)'] },
            { name: 'A.S. ROMA', formation: '4-5-1', players: ['S. Lammens (1 GK)', 'M. Hermoso (22 CB)', 'Hummels (15 CB)', 'P. Neville (2 RB)', 'S. Abdulhamid (12 LB)', 'L. Paredes (16 DMF)', 'Totti (10 CMF)', 'Dybala (21 CMF)', 'Z. Boniek (8 RMF)', 'Conti (9 LMF)', 'Batistuta (7 CF)'] },
            { name: 'GENOA CFC', formation: '3-5-2', players: ['Nicola Leali (GK)', 'Alessandro Vogliacco (CB)', 'Johan Vásquez (CB)', 'Alan Matturro (CB)', 'Stefano Sabelli (RWB)', 'Morten Frendrup (CM)', 'Milan Badelj (DM)', 'Aarón Martín (LWB)', 'Andrea Pinamonti (ST)', 'Vitinha (ST)', 'Ruslan Malinovskyi (CMF)'] },
            { name: 'VENEZIA FC', formation: '3-4-2-1', players: ['Filip Stanković (GK)', 'Antonio Candela (CB)', 'Michael Svoboda (CB)', 'Jay Idzes (CB)', 'Francesco Zampano (RWB)', 'Alfred Duncan (CM)', 'Hans Nicolussi Caviglia (CM)', 'Ridgeciano Haps (LWB)', 'Gianluca Busio (RAM)', 'Gaetano Oristanio (LAM)', 'Joel Pohjanpalo (ST)'] },
            { name: 'TORINO FC', formation: '3-5-2', players: ['Vanja Milinković-Savić (GK)', 'Saul Coco (CB)', 'Guillermo Maripán (CB)', 'Adam Masina (CB)', 'Marcus Pedersen (RWB)', 'Samuele Ricci (CM)', 'Karol Linetty (CM)', 'Ivan Ilić (CM)', 'Borna Sosa (LWB)', 'Antonio Sanabria (ST)', 'Che Adams (ST)'] },
            { name: 'UDINESE CALCIO', formation: '3-5-2', players: ['Maduka Okoye (GK)', 'Thomas Kristensen (CB)', 'Jaka Bijol (CB)', 'Isaak Touré (CB)', 'Kingsley Ehizibue (RWB)', 'Sandi Lovrić (CM)', 'Jesper Karlström (DM)', 'Martín Payero (CM)', 'Hassane Kamara (LWB)', 'Florian Thauvin (SS)', 'Lorenzo Lucca (ST)'] },
            { name: 'AC MONZA', formation: '3-4-2-1', players: ['Stefano Turati (GK)', 'Armando Izzo (CB)', 'Pablo Marí (CB)', 'Andrea Carboni (CB)', 'Pedro Pereira (RWB)', 'Matteo Pessina (CM)', 'Warren Bondo (CM)', 'Georgios Kyriakopoulos (LWB)', 'Daniel Maldini (RAM)', 'Dany Mota (LAM)', 'Milan Đurić (ST)'] }
        ]
    },
    {
        id: 'bundesliga',
        name: 'Bundesliga (VĐQG Đức)',
        shortName: 'Bundesliga',
        country: 'Đức',
        badge: '🇩🇪',
        color: 'from-red-600 to-zinc-800',
        teams: [
            { name: 'FC AUGSBURG', formation: '4-2-3-1', players: ['Nediljko Labrović (GK)', 'Marius Wolf (RB)', 'Jeffrey Gouweleeuw (CB)', 'Keven Schlotterbeck (CB)', 'Dimitris Giannoulis (LB)', 'Kristijan Jakić (DMF)', 'Frank Onyeka (DMF)', 'Ruben Vargas (RW)', 'Elvis Rexhbeçaj (AM)', 'Alexis Claude-Maurice (LW)', 'Phillip Tietz (ST)'] },
            { name: 'BAYER 04 LEVERKUSEN', formation: '3-4-2-1', players: ['Matej Kovar (17 GK)', 'P. Hincapié (3 CB)', 'Jonathan Tah (4 CB)', 'Tapsoba (12 CB)', 'E. Palacios (25 DMF)', 'G. Xhaka (34 DMF)', 'N. Mukiele (23 RWB)', 'Ze Roberto (21 LWB)', 'Florian Wirtz (10 AMF)', 'A. Grimaldo (20 AMF)', 'Cha Bum-Kun (11 CF)'] },
            { name: 'FC BAYERN MÜNCHEN', formation: '3-4-2-1', players: ['O. Kahn (1 GK)', 'Min-Jae Kim (13 CB)', 'Lucio (5 CB)', 'Beckenbauer (6 CB)', 'Schweinsteiger (20 DMF)', 'Matthaus (14 DMF)', 'Michael Olise (17 RWB)', 'Lahm (3 LWB)', 'J. Musiala (42 AMF)', 'Thomas Müller (25 AMF)', 'Klose (12 CF)'] },
            { name: 'BORUSSIA DORTMUND', formation: '3-4-2-1', players: ['A. Onana (6 GK)', 'W. Anton (3 CB)', 'Schlotterbeck (4 CB)', 'Niklas Süle (25 CB)', 'Emre Can (23 DMF)', 'R. Bensebaini (5 DMF)', 'M. Sabitzer (20 RWB)', 'J. Brandt (10 LWB)', 'Marco Reus (11 AMF)', 'J. Bellingham (22 AMF)', 'K. Adeyemi (27 CF)'] },
            { name: 'BORUSSIA MÖNCHENGLADBACH', formation: '3-4-1-2', players: ['J. Olschowsky (41 GK)', 'M. Wöber (39 CB)', 'Vogts (6 CB)', 'Nico Elvedi (30 CB)', 'Kramer (23 DMF)', 'Julian Weigl (8 DMF)', 'Borges Sanches (38 RWB)', 'F. Honorat (9 LWB)', 'Rocco Reitz (27 AMF)', 'G. Leon Ranos (28 CF)', 'Jordan (13 CF)'] },
            { name: 'HOLSTEIN KIEL', formation: '5-3-2', players: ['Timon Weiner (GK)', 'Timo Becker (RWB)', 'Patrick Erras (CB)', 'Carl Johansson (CB)', 'Max Geschwill (CB)', 'Lasse Rosenboom (LWB)', 'Lewis Holtby (CMF)', 'Nicolai Remberg (CMF)', 'Magnus Knudsen (CMF)', 'Shuto Machino (CF)', 'Fiete Arp (CF)'] },
            { name: 'EINTRACHT FRANKFURT', formation: '3-4-2-1', players: ['Kevin Trapp (1 GK)', 'H. Smolcic (5 CB)', 'Robin Koch (4 CB)', 'Tuta (35 CB)', 'Sebastian Rode (17 DMF)', 'Hugo Larsson (16 DMF)', 'T. Chandler (22 RWB)', 'Niels Nkounkou (29 LWB)', 'Okocha (10 AMF)', 'Mario Götze (27 AMF)', 'Hugo Ekitiké (9 CF)'] },
            { name: 'SC FREIBURG', formation: '4-2-3-1', players: ['Noah Atubolu (GK)', 'Lukas Kübler (RB)', 'Matthias Ginter (CB)', 'Philipp Lienhart (CB)', 'Christian Günter (LB)', 'Maximilian Eggestein (DMF)', 'Patrick Osterhage (DMF)', 'Ritsu Dōan (RW)', 'Vincenzo Grifo (AM)', 'Eren Dinkçi (LW)', 'Junior Adamu (ST)'] },
            { name: 'FC ST. PAULI', formation: '3-4-2-1', players: ['Nikola Vasilj (GK)', 'Hauke Wahl (CB)', 'Eric Smith (CB)', 'Karol Mets (CB)', 'Manolis Saliakas (RWB)', 'Jackson Irvine (CM)', 'Eric Martel (CM)', 'Philipp Treu (LWB)', 'Oladapo Afolayan (RAM)', 'Danel Sinani (LAM)', 'Johannes Eggestein (ST)'] },
            { name: '1. FC HEIDENHEIM 1846', formation: '4-2-3-1', players: ['Kevin Müller (GK)', 'Omar Traoré (RB)', 'Patrick Mainka (CB)', 'Benedikt Gimber (CB)', 'Jonas Föhrenbach (LB)', 'Lennard Maloney (DMF)', 'Jan Schöppner (DMF)', 'Adrian Beck (RW)', 'Paul Wanner (AM)', 'Mathias Honsak (LW)', 'Marvin Pieringer (ST)'] },
            { name: 'TSG 1899 HOFFENHEIM', formation: '3-4-2-1', players: ['Oliver Baumann (GK)', 'Arthur Chaves (CB)', 'Anton Stach (CB)', 'Stanley Nsoki (CB)', 'Valentin Gendrey (RWB)', 'Florian Grillitsch (CM)', 'Tom Bischof (CM)', 'Alexander Prass (LWB)', 'Adam Hložek (RAM)', 'Andrej Kramarić (LAM)', 'Mergim Berisha (ST)'] },
            { name: 'SV WERDER BREMEN', formation: '3-4-2-1', players: ['Michael Zetterer (GK)', 'Milos Veljkovic (CB)', 'Marco Friedl (CB)', 'Anthony Jung (CB)', 'Mitchell Weiser (RWB)', 'Senne Lynen (CM)', 'Romano Schmid (CM)', 'Derrick Köhn (LWB)', 'Justin Njinmah (RAM)', 'Marvin Ducksch (LAM)', 'Kike García (ST)'] },
            { name: 'VFB STUTTGART', formation: '4-2-3-1', players: ['Alexander Nübel (GK)', 'Josha Vagnoman (RB)', 'Anthony Rouault (CB)', 'Jeff Chabot (CB)', 'Maxim Mittelstädt (LB)', 'Angelo Stiller (DMF)', 'Atakan Karazor (DMF)', 'Jamie Leweling (RW)', 'Enzo Millot (AM)', 'Deniz Undav (LW)', 'Ermedin Demirović (ST)'] },
            { name: '1. FC UNION BERLIN', formation: '3-4-2-1', players: ['Frederik Rønnow (GK)', 'Danilho Doekhi (CB)', 'Kevin Vogt (CB)', 'Diogo Leite (CB)', 'Christopher Trimmel (RWB)', 'Rani Khedira (CM)', 'Janik Haberer (CM)', 'Tom Rothe (LWB)', 'Benedict Hollerbach (RAM)', 'Jeong Woo-yeong (LAM)', 'Yorbe Vertessen (ST)'] },
            { name: '1. FSV MAINZ 05', formation: '3-4-2-1', players: ['Robin Zentner (GK)', 'Dominik Kohr (CB)', 'Stefan Bell (CB)', 'Maxim Leitsch (CB)', 'Anthony Caci (RWB)', 'Kaishu Sano (CM)', 'Nadiem Amiri (CM)', 'Phillipp Mwene (LWB)', 'Lee Jae-sung (RAM)', 'Armindo Sieb (LAM)', 'Jonathan Burkardt (ST)'] },
            { name: 'RB LEIPZIG', formation: '3-4-2-1', players: ['P. Gulácsi (1 GK)', 'C. Lukeba (23 CB)', 'E. Bitshiabu (5 CB)', 'W. Orbán (4 CB)', 'A. Vermeeren (18 DMF)', 'N. Seiwald (13 DMF)', 'A. Haidara (8 RWB)', 'Kevin Kampl (44 LWB)', 'Xavi Simons (10 AMF)', 'Eljif Elmas (6 AMF)', 'Benjamin Sesko (30 CF)'] },
            { name: 'VFL BOCHUM', formation: '4-2-3-1', players: ['Patrick Drewes (GK)', 'Felix Passlack (RB)', 'Jakov Medić (CB)', 'Ivan Ordets (CB)', 'Maximilian Wittek (LB)', 'Ibrahima Sissoko (DMF)', 'Anthony Losilla (DMF)', 'Myron Boadu (RW)', 'Dani de Wit (AM)', 'Koji Miyashiro (LW)', 'Moritz Broschinski (ST)'] },
            { name: 'VFL WOLFSBURG', formation: '4-2-3-1', players: ['Kamil Grabara (GK)', 'Ridle Baku (RB)', 'Denis Vavro (CB)', 'Konstantinos Koulierakis (CB)', 'Joakim Mæhle (LB)', 'Maximilian Arnold (DMF)', 'Yannick Gerhardt (DMF)', 'Tiago Tomás (RW)', 'Lovro Majer (AM)', 'Patrick Wimmer (LW)', 'Mohamed Amoura (ST)'] }
        ]
    },
    {
        id: 'ligue-1',
        name: 'Ligue 1 (VĐQG Pháp)',
        shortName: 'Ligue 1',
        country: 'Pháp',
        badge: '🇫🇷',
        color: 'from-blue-600 to-teal-700',
        teams: [
            { name: 'STADE BRESTOIS 29 (BREST)', formation: '4-3-3', players: ['Marco Bizot (GK)', 'Kenny Lala (RB)', 'Brendan Chardonnet (CB)', 'Julien Le Cardinal (CB)', 'Massadio Haïdara (LB)', 'Mahdi Camara (CMF)', 'Pierre Lees-Melou (CMF)', 'Hugo Magnetti (CMF)', 'Romain Del Castillo (RW)', 'Ludovic Ajorque (ST)', 'Abdallah Sima (LW)'] },
            { name: 'ANGERS SCO', formation: '4-2-3-1', players: ['Yahia Fofana (GK)', 'Carlens Arcus (RB)', 'Emmanuel Biumla (CB)', 'Jordan Lefort (CB)', 'Florent Hanin (LB)', 'Jean-Eudes Aholou (DMF)', 'Yassin Belkhdim (DMF)', 'Jim Allevinah (RW)', 'Himad Abdelli (AM)', 'Farid El Melali (LW)', 'Esteban Lepaul (ST)'] },
            { name: 'AJ AUXERRE', formation: '5-4-1', players: ['Donovan Léon (GK)', 'Ki-Jana Hoever (RWB)', 'Sinaly Diomandé (CB)', 'Jubal (CB)', 'Clément Akpa (CB)', 'Gideon Mensah (LWB)', 'Elisha Owusu (CMF)', 'Kévin Danois (CMF)', 'Gaëtan Perrin (RW)', 'Hamed Traorè (LW)', 'Lassine Sinayoko (ST)'] },
            { name: 'AS SAINT-ÉTIENNE (ASSE)', formation: '4-3-3', players: ['Gautier Larsonneur (GK)', 'Yvann Maçon (RB)', 'Dylan Batubinsika (CB)', 'Mickaël Nadé (CB)', 'Léo Pétrot (LB)', 'Pierre Ekwah (CMF)', 'Louis Mouton (CMF)', 'Benjamin Bouchouari (CMF)', 'Augustine Boakye (RW)', 'Ibrahim Sissoko (ST)', 'Zuriko Davitashvili (LW)'] },
            { name: 'AC AJACCIO', formation: '4-4-2', players: ['François-Joseph Sollacaro (GK)', 'Tony Strata (RB)', 'Axel Bamba (CB)', 'Jesper Huard (CB)', 'Stephen Kouassi (LB)', 'Tim Jabol-Folcarelli (CMF)', 'Thomas Mangani (CMF)', 'Mickaël Barreto (RMF)', 'Benjamin Santelli (LMF)', 'Christopher Ibayi (CF)', 'Aboubakary Kanté (CF)'] },
            { name: 'LOSC LILLE', formation: '4-2-3-1', players: ['Lucas Chevalier (GK)', 'Thomas Meunier (RB)', 'Bafodé Diakité (CB)', 'Alexsandro (CB)', 'Gabriel Gudmundsson (LB)', 'Benjamin André (DMF)', 'Ayyoub Bouaddi (DMF)', 'Edon Zhegrova (RW)', 'Angel Gomes (AM)', 'Osame Sahraoui (LW)', 'Jonathan David (ST)'] },
            { name: 'LE HAVRE AC (HAC)', formation: '4-3-3', players: ['Arthur Desmas (GK)', 'Loïc Négo (RB)', 'Yoann Salmier (CB)', 'Gautier Lloris (CB)', 'Christopher Operi (LB)', 'Abdoulaye Touré (CMF)', 'Oussama Targhalline (CMF)', 'Yassine Kechta (CMF)', 'Josué Casimir (RW)', 'Emmanuel Sabbi (ST)', 'Antoine Joujou (LW)'] },
            { name: 'OLYMPIQUE LYONNAIS (LYON)', formation: '4-3-3', players: ['Anthony Lopes (1 GK)', 'D. Caleta-Car (55 CB)', 'Lovren (5 CB)', 'Maitland-Niles (98 RB)', 'N. Tagliafico (3 LB)', 'Nemanja Matić (31 DMF)', 'Juninho (10 CMF)', 'C. Tolisso (8 CMF)', 'Amin Sarr (27 RWF)', 'Ernest Nuamah (37 LWF)', 'Lacazette (12 CF)'] },
            { name: 'OLYMPIQUE DE MARSEILLE', formation: '5-2-1-2', players: ['Gerónimo Rulli (15 GK)', 'Samuel Gigot (4 CB)', 'C. Mbemba (99 CB)', 'L. Balerdi (5 CB)', 'Pol Lirola (29 RB)', 'Quentin Merlin (3 LB)', 'J. Veretout (27 CMF)', 'Francescoli (8 CMF)', 'Hagi (10 AMF)', 'Eric Cantona (7 CF)', 'Greenwood (11 CF)'] },
            { name: 'AS MONACO FC', formation: '4-5-1', players: ['R. Majecki (1 GK)', 'G. Maripan (3 CB)', 'Bobby Moore (6 CB)', 'Vanderson (2 RB)', 'Ismail Jakobs (14 LB)', 'D. Zakaria (8 DMF)', 'Edan Diop (37 CMF)', 'Thiago (7 CMF)', 'B. Embolo (36 RMF)', 'A. Golovin (17 LMF)', 'Dennis Law (10 CF)'] },
            { name: 'MONTPELLIER HSC', formation: '4-2-3-1', players: ['Benjamin Lecomte (GK)', 'Falaye Sacko (RB)', 'Becir Omeragic (CB)', 'Kiki Kouyaté (CB)', 'Issiaga Sylla (LB)', 'Joris Chotard (DMF)', 'Rabby Nzingoula (DMF)', 'Arnaud Nordin (RW)', 'Teji Savanier (AM)', 'Tanguy Coulibaly (LW)', 'Akor Adams (ST)'] },
            { name: 'FC NANTES', formation: '4-3-3', players: ['Alban Lafont (GK)', 'Kelvin Amian (RB)', 'Jean-Charles Castelletto (CB)', 'Nathan Zézé (CB)', 'Nicolas Cozza (LB)', 'Pedro Chirivella (CMF)', 'Douglas Augusto (CMF)', 'Johann Lepenant (CMF)', 'Sorba Thomas (RW)', 'Matthis Abline (ST)', 'Moses Simon (LW)'] },
            { name: 'OGC NICE', formation: '3-4-2-1', players: ['Marcin Bułka (GK)', 'Youssouf Ndayishimiye (CB)', 'Moïse Bombito (CB)', 'Dante (CB)', 'Jonathan Clauss (RWB)', 'Pablo Rosario (CMF)', 'Hicham Boudaoui (CMF)', 'Melvin Bard (LWB)', 'Mohamed-Ali Cho (RAM)', 'Evann Guessand (LAM)', 'Youssoufa Moukoko (ST)'] },
            { name: 'PARIS SAINT-GERMAIN (PSG)', formation: '4-5-1', players: ['Lev Yashin (1 GK)', 'Marquinhos (6 CB)', 'Thiago Silva (5 CB)', 'A. Hakimi (2 RB)', 'Nuno Mendes (25 LB)', 'M. Verratti (12 DMF)', 'João Neves (87 CMF)', 'Vitinha (17 CMF)', 'Kvaratskhelia (7 RMF)', 'O. Dembélé (10 LMF)', 'Z. Ibrahimovic (9 CF)'] },
            { name: 'STADE DE REIMS', formation: '4-3-3', players: ['Yehvann Diouf (GK)', 'Aurélio Buta (RB)', 'Emmanuel Agbadou (CB)', 'Joseph Okumu (CB)', 'Sergio Akieme (LB)', 'Valentin Atangana (CMF)', 'Marshall Munetsi (CMF)', 'Teddy Teuma (CMF)', 'Junya Ito (RW)', 'Oumar Diakité (ST)', 'Keito Nakamura (LW)'] },
            { name: 'STADE RENNAIS FC', formation: '4-3-3', players: ['Steve Mandanda (GK)', 'Alidu Seidu (RB)', 'Christopher Wooh (CB)', 'Leo Østigård (CB)', 'Adrien Truffert (LB)', 'Azor Matusiwa (CMF)', 'Glen Kamara (CMF)', 'Baptiste Santamaria (CMF)', 'Ludovic Blas (RW)', 'Arnaud Kalimuendo (ST)', 'Albert Grønbæk (LW)'] },
            { name: 'TOULOUSE FC', formation: '3-4-2-1', players: ['Guillaume Restes (GK)', 'Djibril Sidibé (CB)', 'Charlie Cresswell (CB)', 'Mark McKenzie (CB)', 'Aron Dønnum (RWB)', 'Cristian Cásseres Jr. (CMF)', 'Vincent Sierro (CMF)', 'Gabriel Suazo (LWB)', 'Zakaria Aboukhlal (RAM)', 'Yann Gboho (LAM)', 'Joshua King (ST)'] },
            { name: 'RC LENS', formation: '3-4-1-2', players: ['Brice Samba (GK)', 'Jonathan Gradit (CB)', 'Kevin Danso (CB)', 'Facundo Medina (CB)', 'Przemysław Frankowski (RWB)', 'Andy Diouf (CMF)', 'Adrien Thomasson (CMF)', 'Deiver Machado (LWB)', 'Angelo Fulgini (AM)', 'Florian Sotoca (ST)', "M'Bala Nzola (ST)"] },
            { name: 'FC METZ', formation: '4-3-3', players: ['Alexandre Oukidja (GK)', 'Koffi Kouao (RB)', 'Ismaël Traoré (CB)', 'Sadibou Sané (CB)', 'Maxime Colin (LB)', 'Danley Jean Jacques (CMF)', 'Lamine Camara (CMF)', "Joseph N'Duquidi (CMF)", 'Joel Asoro (RW)', 'Georges Mikautadze (ST)', 'Papa Amadou Diallo (LW)'] },
            { name: 'RC STRASBOURG ALSACE', formation: '3-4-2-1', players: ['Djordje Petrović (GK)', 'Guéla Doué (CB)', 'Saïdou Sow (CB)', 'Abakar Sylla (CB)', 'Marvin Senaya (RWB)', 'Andrey Santos (CMF)', 'Ismaël Doukouré (CMF)', 'Caleb Wiley (LWB)', 'Dilane Bakwa (RAM)', 'Sebastián Nanasi (LAM)', 'Emanuel Emegha (ST)'] }
        ]
    },
    {
        id: 'european-clubs',
        name: 'Giải Cúp Các CLB Châu Âu (20 Đội)',
        shortName: 'Cúp CLB Châu Âu',
        country: 'Châu Âu',
        badge: '🏆',
        color: 'from-emerald-600 to-cyan-700',
        teams: [
            { name: 'RSC Anderlecht', formation: '4-2-3-1', players: ['Colin Coosemans (GK)', 'Killian Sardella (RB)', 'Jan-Carlo Simić (CB)', 'Zanka (CB)', "Moussa N'Diaye (LB)", 'Mats Rits (DMF)', 'Theo Leoni (DMF)', 'Francis Amuzu (RW)', 'Thorgan Hazard (AM)', 'Mario Stroeykens (LW)', 'Kasper Dolberg (CF)'] },
            { name: 'Legia Warszawa', formation: '4-2-3-1', players: ['Kacper Tobiasz (GK)', 'Paweł Wszołek (RB)', 'Steve Kapuadi (CB)', 'Radovan Pankov (CB)', 'Rúben Vinagre (LB)', 'Juergen Elitim (DMF)', 'Bartosz Slisz (DMF)', 'Luquinhas (RW)', 'Rafał Augustyniak (AM)', 'Josué (LW)', 'Tomáš Pekhart (CF)'] },
            { name: 'BSC Young Boys', formation: '4-4-2', players: ['David von Ballmoos (GK)', 'Lewin Blum (RB)', 'Mohamed Ali Camara (CB)', 'Loris Benito (CB)', 'Jaouen Hadjam (LB)', 'Joel Monteiro (RMF)', 'Filip Ugrinic (CMF)', 'Sandro Lauper (CMF)', 'Alan Virginius (LMF)', 'Cedric Itten (CF)', 'Meschak Elia (CF)'] },
            { name: 'Beşiktaş JK', formation: '4-2-3-1', players: ['Mert Günok (GK)', 'Jonas Svensson (RB)', 'Gabriel Paulista (CB)', 'Omar Colley (CB)', 'Arthur Masuaku (LB)', 'Gedson Fernandes (DMF)', 'Al-Musrati (DMF)', 'Milot Rashica (RW)', 'Rafa Silva (AM)', 'Ernest Muçi (LW)', 'Ciro Immobile (CF)'] },
            { name: 'FC København', formation: '4-2-3-1', players: ['Nathan Trott (GK)', 'Giorgi Gocholeishvili (RB)', 'Pantelis Hatzidiakos (CB)', 'Gabriel Pereira (CB)', 'Kevin Diks (LB)', 'Lukas Lerager (DMF)', 'Thomas Delaney (DMF)', 'Mohamed Elyounoussi (RW)', 'Magnus Mattsson (AM)', 'Elias Achouri (LW)', 'Andreas Cornelius (CF)'] },
            { name: 'AFC Ajax', formation: '4-3-3', players: ['Dudek (1 GK)', 'Josip Sutalo (37 RB)', 'A. Kaplan (13 CB)', 'Stam (3 CB)', 'Alaba (15 LB)', 'J. Henderson (4 DMF)', 'Cruyff (14 CMF)', 'Pele (10 CMF)', 'Dennis Bergkamp (7 RWF)', 'Zico (11 LWF)', 'Solskjaer (20 CF)'] },
            { name: 'Maccabi Tel Aviv FC', formation: '4-3-3', players: ['Roi Mishpati (GK)', 'Nacho Pérez (RB)', 'Nir Bitton (CB)', 'Raz Shlomo (CB)', 'Roy Revivo (LB)', 'Joris van Overeem (CMF)', 'Dor Peretz (CMF)', 'Gabi Kanichowsky (CMF)', 'Elad Madmon (RW)', 'Dor Turgeman (CF)', 'Wes Patati (LW)'] },
            { name: 'PSV Eindhoven', formation: '4-5-1', players: ['W. Benítez (1 GK)', 'R. Karsdorp (6 RB)', 'P. Van Aanholt (30 CB)', 'A. Obispo (4 CB)', 'Sergiño Dest (8 LB)', 'J. Schouten (22 DMF)', 'Ismael Saibari (34 CMF)', 'Joey Veerman (23 CMF)', 'H. Lozano (27 RMF)', 'Robben (11 LMF)', 'van Nistelrooy (10 CF)'] },
            { name: 'Olympiacos FC', formation: '4-2-3-1', players: ['Alexandros Paschalakis (GK)', 'Rodinei (RB)', 'Panagiotis Retsos (CB)', 'David Carmo (CB)', 'Francisco Ortega (LB)', 'Santiago Hezze (DMF)', 'Chiquinho (DMF)', 'Gelson Martins (RW)', 'Kostas Fortounis (AM)', 'Daniel Podence (LW)', 'Ayoub El Kaabi (CF)'] },
            { name: 'Feyenoord Rotterdam', formation: '4-4-1-1', players: ['J. Bijlow (1 GK)', 'Marcos López (15 RB)', 'David Hancko (33 CB)', 'Thomas Beelen (3 CB)', 'Q. Hartman (5 LB)', 'R. Zerrouki (6 DMF)', 'T. Van Den Belt (16 DMF)', 'A. Jahanbakhsh (7 RMF)', 'Ondrej Lingr (12 LMF)', 'Makkay (9 AMF)', 'Van Persie (32 CF)'] },
            { name: 'FC Red Bull Salzburg', formation: '4-4-2', players: ['Jonas Krumrey (41 GK)', 'L. Morgalla (39 RB)', 'Bryan Okoh (5 CB)', 'Lukas Wallner (55 CB)', 'A. Ulmer (17 LB)', 'Oscar Gloukh (30 CMF)', 'J. Omoregie (36 CMF)', 'Kjaergaard (14 CMF)', 'Mads Bidstrup (18 CMF)', 'Dorgeles Nene (45 CF)', 'Arkadiusz Milik (9 CF)'] },
            { name: 'Sporting CP', formation: '3-4-3', players: ['Antonio Adán (1 GK)', 'Luís Neto (13 CB)', 'O. Diomande (26 CB)', 'S. Coates (4 CB)', 'J. Cancelo (19 RWB)', 'Nani (17 LWB)', 'Deco (10 CMF)', 'F. Trincao (9 CMF)', 'Rochinha (16 RWF)', 'Arthur Gomes (33 LWF)', 'C. Ronaldo Jr. (7 CF)'] },
            { name: 'SL Benfica', formation: '4-4-1-1', players: ["Preud'homme (1 GK)", 'Issa Kaboré (3 RB)', 'António Silva (4 CB)', 'Otamendi (30 CB)', 'Á. Carreras (2 LB)', 'Fredrik Aursnes (8 DMF)', 'Orkun Kökçü (12 DMF)', 'João Mario (20 RMF)', 'Di María (11 LMF)', 'Rui Costa (10 AMF)', 'Eusebio (9 CF)'] },
            { name: 'FK Crvena Zvezda', formation: '4-2-3-1', players: ['Omri Glazer (GK)', 'Ognjen Mimović (RB)', 'Uroš Spajić (CB)', 'Nasser Djiga (CB)', 'Seol Young-woo (LB)', 'Rade Krunić (DMF)', 'Timi Max Elšnik (DMF)', 'Silas Katompa Mvumpa (RW)', 'Mirko Ivanić (AM)', 'Cherif Ndiaye (LW)', 'Bruno Duarte (CF)'] },
            { name: 'FC Sheriff Tiraspol', formation: '4-3-3', players: ['Rashed Al-Tumi (GK)', 'Nana Boakye (RB)', 'Alejandro Artunduaga (CB)', 'Cristian Tovar (CB)', 'Danila Forov (LB)', 'Cedric Badolo (CMF)', 'Moussa Kyabou (CMF)', 'Peter Ademo (CMF)', 'João Paulo (RW)', 'Rasheed Akanbi (CF)', 'Vinni Silva (LW)'] },
            { name: 'FC Porto', formation: '4-2-3-1', players: ['Diogo Costa (GK)', 'Martim Fernandes (RB)', 'Nehuén Pérez (CB)', 'Tiago Djaló (CB)', 'Francisco Moura (LB)', 'Alan Varela (DMF)', 'Nico González (DMF)', 'Pepê (RW)', 'Fábio Vieira (AM)', 'Galeno (LW)', 'Samu Omorodon (CF)'] },
            { name: 'Al-Nassr FC', formation: '4-3-1-2', players: ['W. Abdullah (33 GK)', 'S. Al-Ghannam (2 RB)', 'A. Al-Amri (5 CB)', 'Laporte (27 CB)', 'Alex Telles (15 LB)', 'Casemiro (14 DMF)', 'L. Modrić (10 CMF)', 'Kroos (8 CMF)', 'Talisca (94 AMF)', 'Benzema (11 CF)', 'Gerd Muller (9 CF)'] },
            { name: 'FC Zenit Saint Petersburg', formation: '4-3-3', players: ['Evgeni Latyshonok (GK)', 'Vyacheslav Karavaev (RB)', 'Nino (CB)', 'Rodrigo Aliendro (CB)', 'Douglas Santos (LB)', 'Wilmar Barrios (CMF)', 'Wendel (CMF)', 'Maxim Glushenkov (CMF)', 'Pedro (RW)', 'Mateo Cassierra (CF)', 'Andrei Mostovoy (LW)'] },
            { name: 'Celtic FC', formation: '4-3-3', players: ['Kasper Schmeichel (GK)', 'Alistair Johnston (RB)', 'Cameron Carter-Vickers (CB)', 'Liam Scales (CB)', 'Greg Taylor (LB)', 'Callum McGregor (CMF)', 'Reo Hatate (CMF)', 'Paulo Bernardo (CMF)', 'Nicolas Kühn (RW)', 'Kyogo Furuhashi (CF)', 'Daizen Maeda (LW)'] },
            { name: 'FC Viktoria Plzeň', formation: '3-4-1-2', players: ['Martin Jedlička (GK)', 'Sampson Dweh (CB)', 'Václav Jemelka (CB)', 'Robin Hranáč (CB)', 'Milan Havel (RWB)', 'Lukáš Kalvach (CMF)', 'Pavel Šulc (CMF)', 'Cadu (LWB)', 'Matěj Vydra (AMF)', 'Rafiu Durosinmi (CF)', 'Pavel Šulc #2 (CF)'] }
        ]
    },
    {
        id: 'legends-regional',
        name: 'Giải Siêu Sao & Khu Vực (12 Đội)',
        shortName: 'Siêu Sao & Khu Vực',
        country: 'Quốc Tế',
        badge: '🌏',
        color: 'from-amber-500 to-orange-700',
        teams: [
            { name: 'GALATASARAY A.S.', formation: '4-4-1-1', players: ['Muslera (1 GK)', 'Serge Aurier (2 RB)', 'A. Bardakci (42 CB)', 'D. Sánchez (12 CB)', 'K. Karataş (88 LB)', 'Dunga (6 DMF)', 'Eyüp Aydın (5 DMF)', 'K. Demirbay (8 RMF)', 'Wilfried Zaha (14 LMF)', 'Hakim Ziyech (22 AMF)', 'Radamel Falcao (9 CF)'] },
            { name: 'Shakhtar Donetsk', formation: '4-3-3', players: ['Dmytro Riznyk (1 GK)', 'Yukhym Konoplya (RB)', 'Valeriy Bondar (CB)', 'Mykola Matviyenko (CB)', 'Pedro Henrique (LB)', 'Marlon Gomes (CMF)', 'Taras Stepanenko (CMF)', 'Georgiy Sudakov (CMF)', 'Oleksandr Zubkov (RW)', 'Danylo Sikan (CF)', 'Kevin (LW)'] },
            { name: 'VIET NAM', formation: '3-4-2-1', players: ['Dang Van Lam (1 GK)', 'B H Viet Anh (4 CB)', 'Do Duy Manh (6 CB)', 'Vu Nhu Thanh (2 CB)', 'Pham Xuan Manh (13 RWB)', 'Do Hung Dung (16 DMF)', 'Ng Hoang Duc (14 DMF)', 'Doan Van Hau (5 LWB)', 'Ng Quang Hai (19 AMF)', 'Nguyen Viet Tu (17 AMF)', 'Viet Anh Nguyen (7 CF)'] },
            { name: 'FENERBAHCE SK', formation: '4-4-1-1', players: ['Ertugrul Cetin (97 GK)', 'B. Osayi-Samuel (21 RB)', 'Luan Peres (14 CB)', 'S. Akaydin (3 CB)', 'Lincoln (18 LB)', 'Bartug Elmaz (28 DMF)', 'Fred (35 DMF)', 'Joshua King (15 RMF)', 'Kuyt (11 LMF)', 'Mesut Özil (10 AMF)', 'Edin Džeko (9 CF)'] },
            { name: 'Club Brugge', formation: '4-3-3', players: ['Simon Mignolet (1 GK)', 'Joaquin Seys (RB)', 'Joel Ordóñez (CB)', 'Brandon Mechele (CB)', 'Maxim De Cuyper (LB)', 'Raphael Onyedika (CMF)', 'Hans Vanaken (CMF)', 'Hugo Vetlesen (CMF)', 'Chemsdine Talbi (RW)', 'Ferran Jutglà (CF)', 'Christos Tzolis (LW)'] },
            { name: 'PFC Ludogorets Razgrad', formation: '4-3-3', players: ['Sergio Padt (1 GK)', 'Aslak Fonn Witry (RB)', 'Olivier Verdon (CB)', 'Dinis Almeida (CB)', 'Son (LB)', 'Jakub Piotrowski (CMF)', 'Pedro Naressi (CMF)', 'Ivaylo Chochev (CMF)', 'Caio Vidal (RW)', 'Kwadwo Duah (CF)', 'Rick (LW)'] },
            { name: 'DINAMO KYIV', formation: '4-4-1-1', players: ['Nexus (1 GK)', 'Carlos Alberto (4 RB)', 'Iván Córdoba (25 CB)', 'Vigor (5 CB)', 'Dubinchak (44 LB)', 'P. Andersson (14 DMF)', 'Ruben Sobrino (26 DMF)', 'Raphinha (21 RMF)', 'Lamine Yamal (19 LMF)', 'B. Fernandes (8 AMF)', 'Lewandowski (9 CF)'] },
            { name: 'MALMO FF', formation: '4-4-1-1', players: ['I. Diawara (30 GK)', 'F. Brorsson (31 RB)', 'L. Nielsen (24 CB)', 'Andrei Burcă (16 CB)', 'E. Larsson (2 LB)', 'Adi Nalic (22 DMF)', 'Christiansen (12 DMF)', 'Erdal Rakip (7 RMF)', 'Toivonen (11 LMF)', 'Litmanen (10 AMF)', 'Jo Inge Berget (32 CF)'] },
            { name: 'Rangers FC', formation: '4-2-3-1', players: ['Jack Butland (1 GK)', 'James Tavernier (RB)', 'John Souttar (CB)', 'Robin Pröpper (CB)', 'Jefté (LB)', 'Connor Barron (DMF)', 'Nicolas Raskin (DMF)', 'Václav Cerny (RW)', 'Nedim Bajrami (AM)', 'Tom Lawrence (LW)', 'Cyriel Dessers (CF)'] },
            { name: 'GNK Dinamo Zagreb', formation: '3-4-2-1', players: ['Ivan Nevistić (1 GK)', 'Kévin Théophile-Catherine (CB)', 'Raúl Torrente (CB)', 'Samy Mmaee (CB)', 'Stefan Ristovski (RWB)', 'Petar Sučić (CMF)', 'Josip Mišić (CMF)', 'Takuya Ogiwara (LWB)', 'Martin Baturina (RAM)', 'Marko Pjaca (LAM)', 'Bruno Petković (CF)'] },
            { name: 'INTER MIAMI', formation: '4-3-1-2', players: ['D. Callender (1 GK)', 'D. Yedlin (2 RB)', 'S. Kryvtsov (27 CB)', 'Ian Fray (24 CB)', 'Jordi Alba (18 LB)', 'S. Busquets (5 DMF)', 'R. De Paul (7 CMF)', 'B. Cremaschi (30 CMF)', 'Messi (10 AMF)', 'L. Suárez (12 CF)', 'L. Campana (9 CF)'] },
            { name: 'EFOOTBALL LEGENDS', formation: '4-4-1-1', players: ['Schmeichel (1 GK)', 'Víctor Gómez (6 RB)', 'José Fonte (4 CB)', 'Jurgen Kohler (32 CB)', 'Agger (26 LB)', 'Socrates (30 DMF)', 'Ji-Sun Park (13 DMF)', 'B. Laudrup (29 RMF)', 'João Moutinho (7 LMF)', 'M. Laudrup (28 AMF)', 'Pizarro (9 CF)'] }
        ]
    }
];

// ============================================================================
// 2. QUẢN LÝ TRẠNG THÁI & SAO LƯU ĐÁM MÂY GOOGLE (CLOUD SAVE)
// ============================================================================
let appState = {
    activeView: 'honors',
    activeTournamentId: 'premier-league',
    activeTab: 'standings',
    customClubs: [],          // Các mẫu CLB tự tạo gốc (Được bảo vệ bất biến khi Reset)
    customPlayersByTeam: {},  // Các cầu thủ tự tạo gốc bổ sung vào từng CLB (Được bảo vệ khi Reset)
    tournaments: {},
    honorsHistory: []         // Lịch sử Cúp & Danh hiệu Trophy Cabinet (Được bảo vệ bất biến khi Reset)
};


// Bản đồ tra cứu nhanh 130 CLB gốc + CLB tự tạo + cầu thủ gốc/tự tạo
function getMasterClubsMap() {
    const map = {};
    RAW_LEAGUES_DATA.forEach(league => {
        league.teams.forEach(t => {
            const extraPlayers = appState.customPlayersByTeam[t.name] || [];
            map[t.name] = {
                name: t.name,
                leagueId: league.id,
                leagueName: league.shortName,
                country: league.country,
                formation: t.formation,
                isCustomClub: false,
                basePlayers: [...t.players],
                players: [...t.players, ...extraPlayers]
            };
        });
    });

    (appState.customClubs || []).forEach(c => {
        const extraPlayers = appState.customPlayersByTeam[c.name] || [];
        map[c.name] = {
            name: c.name,
            leagueId: 'custom-clubs',
            leagueName: 'CLB Tự Tạo Gốc',
            country: c.country || 'Tự Tạo',
            formation: c.formation || '4-3-3',
            isCustomClub: true,
            basePlayers: [...c.players],
            players: [...c.players, ...extraPlayers]
        };
    });
    return map;
}

// ============================================================================
// 3. SINH LỊCH THI ĐẤU TỰ ĐỘNG CHO CÁC THỂ THỨC
// ============================================================================
function generateRoundRobinMatches(teamNames, doubleLeg = false) {
    const teams = [...teamNames];
    if (teams.length < 2) return [];
    if (teams.length % 2 !== 0) teams.push('BYE');
    const n = teams.length;
    const roundsCount = n - 1;
    const matches = [];
    let matchCounter = 1;

    const list = [...teams];
    for (let r = 0; r < roundsCount; r++) {
        for (let i = 0; i < n / 2; i++) {
            const home = list[i];
            const away = list[n - 1 - i];
            if (home !== 'BYE' && away !== 'BYE') {
                matches.push({
                    id: `m_${matchCounter++}`,
                    round: r + 1,
                    stage: 'League',
                    home: r % 2 === 0 ? home : away,
                    away: r % 2 === 0 ? away : home,
                    homeScore: null,
                    awayScore: null,
                    played: false,
                    events: []
                });
            }
        }
        const fixed = list[0];
        const rest = list.slice(1);
        rest.unshift(rest.pop());
        list.splice(0, list.length, fixed, ...rest);
    }

    if (doubleLeg) {
        const firstLegCount = matches.length;
        for (let i = 0; i < firstLegCount; i++) {
            const m = matches[i];
            matches.push({
                id: `m_${matchCounter++}`,
                round: m.round + roundsCount,
                stage: 'League',
                home: m.away,
                away: m.home,
                homeScore: null,
                awayScore: null,
                played: false,
                events: []
            });
        }
    }
    return matches;
}

function generateSwissLeagueMatches(teamNames, roundsToPlay = 8) {
    const teams = [...teamNames];
    if (teams.length < 2) return [];
    const n = teams.length;
    const matches = [];
    let matchCounter = 1;
    const maxRounds = Math.min(roundsToPlay, n - 1);

    for (let r = 1; r <= maxRounds; r++) {
        const used = new Set();
        for (let i = 0; i < n; i++) {
            if (used.has(i)) continue;
            const oppIdx = (i + r) % n;
            if (!used.has(oppIdx) && oppIdx !== i) {
                used.add(i);
                used.add(oppIdx);
                matches.push({
                    id: `ucl_m_${matchCounter++}`,
                    round: r,
                    stage: 'Swiss League Phase',
                    home: r % 2 === 1 ? teams[i] : teams[oppIdx],
                    away: r % 2 === 1 ? teams[oppIdx] : teams[i],
                    homeScore: null,
                    awayScore: null,
                    played: false,
                    events: []
                });
            }
        }
    }
    return matches;
}

function generateGroupKnockoutMatches(teamNames) {
    const matches = [];
    let idCounter = 1;
    const groupSize = 4;
    const numGroups = Math.max(1, Math.ceil(teamNames.length / groupSize));
    const groupLetters = 'ABCDEFGH';

    for (let g = 0; g < numGroups; g++) {
        const gTeams = teamNames.slice(g * groupSize, (g + 1) * groupSize);
        const gMatches = generateRoundRobinMatches(gTeams, false);
        gMatches.forEach(m => {
            matches.push({
                ...m,
                id: `gk_${idCounter++}`,
                stage: `Bảng ${groupLetters[g] || (g + 1)}`
            });
        });
    }
    return matches;
}

function generateDoubleEliminationMatches(teamNames) {
    const matches = [];
    let idCounter = 1;
    for (let i = 0; i < teamNames.length - 1; i += 2) {
        matches.push({
            id: `de_${idCounter++}`,
            round: 1,
            stage: 'Nhánh Thắng - Vòng 1',
            home: teamNames[i],
            away: teamNames[i + 1],
            homeScore: null,
            awayScore: null,
            played: false,
            events: []
        });
    }
    return matches;
}

function buildDefaultTournaments() {
    const tournaments = {};

    RAW_LEAGUES_DATA.forEach(league => {
        const teamNames = league.teams.map(t => t.name);
        tournaments[league.id] = {
            id: league.id,
            name: league.name,
            shortName: league.shortName,
            badge: league.badge,
            color: league.color,
            format: 'league',
            isBuiltIn: true,
            teams: teamNames,
            matches: generateRoundRobinMatches(teamNames, false),
            champion: null,
            completed: false
        };
    });

    const initialUCLTeams = [
        'REAL MADRID CF', 'FC BARCELONA', 'ATLÉTICO MADRID', 'ATHLETIC CLUB (BILBAO)',
        'MANCHESTER CITY', 'ARSENAL FC', 'LIVERPOOL FC', 'CHELSEA FC',
        'INTER MILAN', 'A.C. MILAN', 'JUVENTUS F.C.', 'ATALANTA BC',
        'FC BAYERN MÜNCHEN', 'BAYER 04 LEVERKUSEN', 'BORUSSIA DORTMUND', 'RB LEIPZIG',
        'PARIS SAINT-GERMAIN (PSG)', 'AS MONACO FC', 'LOSC LILLE', 'OLYMPIQUE LYONNAIS (LYON)',
        'SL BENFICA', 'Sporting CP', 'AFC Ajax', 'PSV Eindhoven'
    ];

    tournaments['ucl'] = {
        id: 'ucl',
        name: 'UEFA Champions League (Cúp C1 - Thể Thức Mới)',
        shortName: 'Cúp C1 (UCL)',
        badge: '⭐',
        color: 'from-indigo-600 to-blue-900',
        format: 'swiss',
        isBuiltIn: true,
        teams: initialUCLTeams,
        matches: generateSwissLeagueMatches(initialUCLTeams, 8),
        champion: null,
        completed: false
    };

    return tournaments;
}

// ============================================================================
// 4. TÍNH TOÁN BẢNG XẾP HẠNG, TOP GHI BÀN, KIẾN TẠO & BÌNH CHỌN DANH HIỆU
// ============================================================================
function calculateTournamentStats(tournamentId) {
    const t = appState.tournaments[tournamentId];
    if (!t) return { standings: [], topScorers: [], topAssists: [], cleanSheets: [] };

    const statsMap = {};
    t.teams.forEach(teamName => {
        statsMap[teamName] = {
            team: teamName,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            gf: 0,
            ga: 0,
            gd: 0,
            points: 0
        };
    });

    const scorerMap = {};
    const assistMap = {};
    const csMap = {};
    const masterClubs = getMasterClubsMap();

    t.matches.forEach(m => {
        if (!m.played || m.homeScore === null || m.awayScore === null) return;

        const h = statsMap[m.home];
        const a = statsMap[m.away];
        if (h && a) {
            h.played++;
            a.played++;
            h.gf += m.homeScore;
            h.ga += m.awayScore;
            a.gf += m.awayScore;
            a.ga += m.homeScore;
            h.gd = h.gf - h.ga;
            a.gd = a.gf - a.ga;

            if (m.homeScore > m.awayScore) {
                h.won++; h.points += 3; a.lost++;
            } else if (m.homeScore < m.awayScore) {
                a.won++; a.points += 3; h.lost++;
            } else {
                h.drawn++; a.drawn++; h.points += 1; a.points += 1;
            }
        }

        if (m.awayScore === 0 && masterClubs[m.home]) {
            const gkName = masterClubs[m.home].players[0];
            const key = `${gkName}|||${m.home}`;
            if (!csMap[key]) csMap[key] = { player: gkName, team: m.home, count: 0 };
            csMap[key].count++;
        }
        if (m.homeScore === 0 && masterClubs[m.away]) {
            const gkName = masterClubs[m.away].players[0];
            const key = `${gkName}|||${m.away}`;
            if (!csMap[key]) csMap[key] = { player: gkName, team: m.away, count: 0 };
            csMap[key].count++;
        }

        (m.events || []).forEach(ev => {
            if (ev.type === 'goal') {
                const key = `${ev.player}|||${ev.team}`;
                if (!scorerMap[key]) scorerMap[key] = { player: ev.player, team: ev.team, count: 0 };
                scorerMap[key].count++;
            } else if (ev.type === 'assist') {
                const key = `${ev.player}|||${ev.team}`;
                if (!assistMap[key]) assistMap[key] = { player: ev.player, team: ev.team, count: 0 };
                assistMap[key].count++;
            }
        });
    });

    const standings = Object.values(statsMap).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
    });

    const topScorers = Object.values(scorerMap).sort((a, b) => b.count - a.count);
    const topAssists = Object.values(assistMap).sort((a, b) => b.count - a.count);
    const cleanSheets = Object.values(csMap).sort((a, b) => b.count - a.count);

    return { standings, topScorers, topAssists, cleanSheets };
}

function calculateGlobalAwards() {
    const clubTrophies = {};
    Object.values(appState.tournaments).forEach(t => {
        if (t.champion) {
            if (!clubTrophies[t.champion]) clubTrophies[t.champion] = [];
            clubTrophies[t.champion].push(t.shortName);
        }
    });

    const playerAgg = {};
    const gkAgg = {};
    const masterClubs = getMasterClubsMap();

    Object.values(appState.tournaments).forEach(t => {
        const { topScorers, topAssists, cleanSheets } = calculateTournamentStats(t.id);

        topScorers.forEach(s => {
            const key = `${s.player}|||${s.team}`;
            if (!playerAgg[key]) playerAgg[key] = { player: s.player, team: s.team, goals: 0, assists: 0, trophies: clubTrophies[s.team] || [] };
            playerAgg[key].goals += s.count;
        });

        topAssists.forEach(a => {
            const key = `${a.player}|||${a.team}`;
            if (!playerAgg[key]) playerAgg[key] = { player: a.player, team: a.team, goals: 0, assists: 0, trophies: clubTrophies[a.team] || [] };
            playerAgg[key].assists += a.count;
        });

        cleanSheets.forEach(c => {
            const key = `${c.player}|||${c.team}`;
            if (!gkAgg[key]) gkAgg[key] = { player: c.player, team: c.team, cs: 0, trophies: clubTrophies[c.team] || [] };
            gkAgg[key].cs += c.count;
        });
    });

    Object.entries(clubTrophies).forEach(([teamName, trophies]) => {
        const club = masterClubs[teamName];
        if (!club) return;
        const starPlayer = club.players[club.players.length - 1];
        const pKey = `${starPlayer}|||${teamName}`;
        if (!playerAgg[pKey]) playerAgg[pKey] = { player: starPlayer, team: teamName, goals: 0, assists: 0, trophies };

        const gkPlayer = club.players[0];
        const gKey = `${gkPlayer}|||${teamName}`;
        if (!gkAgg[gKey]) gkAgg[gKey] = { player: gkPlayer, team: teamName, cs: 0, trophies };
    });

    const ballonDorRanking = Object.values(playerAgg).map(p => {
        const hasUCL = p.trophies.some(tr => tr.includes('C1') || tr.includes('Champions'));
        const trophyBonus = (p.trophies.length * 25) + (hasUCL ? 20 : 0);
        const score = (p.goals * 4) + (p.assists * 3) + trophyBonus;
        return { ...p, score };
    }).sort((a, b) => b.score - a.score);

    const yashinRanking = Object.values(gkAgg).map(g => {
        const hasUCL = g.trophies.some(tr => tr.includes('C1') || tr.includes('Champions'));
        const trophyBonus = (g.trophies.length * 20) + (hasUCL ? 15 : 0);
        const score = (g.cs * 6) + trophyBonus;
        return { ...g, score };
    }).sort((a, b) => b.score - a.score);

    return { ballonDorRanking, yashinRanking, clubTrophies };
}

// ============================================================================
// 5. ĐIỀU HƯỚNG & RENDER GIAO DIỆN CHÍNH
// ============================================================================
function toggleDrawer(open) {
    const drawer = document.getElementById('navDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if (open) {
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
    } else {
        drawer.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
    }
}

function renderDrawerMenus() {
    const builtInList = document.getElementById('drawerLeaguesList');
    const customSection = document.getElementById('customTournamentsSection');
    const customList = document.getElementById('drawerCustomLeaguesList');

    builtInList.innerHTML = RAW_LEAGUES_DATA.map(lg => {
        const t = appState.tournaments[lg.id];
        const isActive = appState.activeView === 'tournament' && appState.activeTournamentId === lg.id;
        return `
            <button onclick="navigateView('tournament', '${lg.id}')" class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition text-left ${isActive ? 'bg-emerald-600 text-white shadow' : 'text-slate-300 hover:bg-slate-800'}">
                <span class="flex items-center gap-2.5 truncate">
                    <span>${lg.badge}</span>
                    <span class="truncate">${lg.shortName}</span>
                </span>
                ${t && t.champion ? '<i class="fa-solid fa-trophy text-amber-400 text-[11px]"></i>' : `<span class="text-[10px] opacity-60">${lg.teams.length}</span>`}
            </button>
        `;
    }).join('');

    const customTourns = Object.values(appState.tournaments).filter(t => !t.isBuiltIn);
    if (customTourns.length > 0) {
        customSection.classList.remove('hidden');
        customList.innerHTML = customTourns.map(t => {
            const isActive = appState.activeView === 'tournament' && appState.activeTournamentId === t.id;
            return `
                <button onclick="navigateView('tournament', '${escAttr(t.id)}')" class="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition text-left ${isActive ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-800'}">
                    <span class="truncate">🏆 ${escHtml(t.shortName)}</span>
                    <span class="text-[10px] opacity-70">${t.teams.length} đội</span>
                </button>
            `;
        }).join('');
    } else {
        customSection.classList.add('hidden');
    }
}

function navigateView(view, tournamentId = null) {
    appState.activeView = view;
    if (tournamentId) {
        appState.activeTournamentId = tournamentId;
        appState.activeTab = 'standings';
    }
    toggleDrawer(false);
    renderMainView();
}

function renderMainView() {
    renderDrawerMenus();
    const container = document.getElementById('mainContent');
    const titleEl = document.getElementById('headerTitle');
    const subEl = document.getElementById('headerSubtitle');

    if (appState.activeView === 'honors') {
        titleEl.textContent = 'Bảng Vinh Danh & Danh Hiệu';
        subEl.textContent = 'Trao cúp Vô Địch CLB, bình chọn Quả Bóng Vàng & Thủ Môn Xuất Sắc Nhất';
        renderHonorsView(container);
    } else if (appState.activeView === 'tournament') {
        const t = appState.tournaments[appState.activeTournamentId];
        if (!t) return navigateView('honors');
        titleEl.textContent = `${t.badge || '🏆'} ${t.name}`;
        subEl.textContent = `${t.teams.length} Câu Lạc Bộ • Thể thức: ${t.format.toUpperCase()}`;
        renderTournamentView(container, t);
    } else if (appState.activeView === 'all-clubs') {
        titleEl.textContent = 'Danh Sách 130+ Câu Lạc Bộ & Đội Hình Chính';
        subEl.textContent = 'Đội hình 11 cầu thủ ra sân chính gốc & tự tạo được bảo vệ chống xóa';
        renderAllClubsView(container);
    } else if (appState.activeView === 'create-tournament') {
        titleEl.textContent = 'Tạo Giải Đấu Mới';
        subEl.textContent = 'Hỗ trợ Vòng tròn (League), Chia bảng + Knockout, Swiss C1 & Nhánh thắng - Nhánh thua';
        renderCreateTournamentView(container);
    }
}

// ============================================================================
// 6. VIEW: BẢNG VINH DANH & BÌNH CHỌN DANH HIỆU CÁ NHÂN (TROPHY CABINET)
// ============================================================================
function renderHonorsView(container) {
    const { ballonDorRanking, yashinRanking } = calculateGlobalAwards();
    const topPlayer = ballonDorRanking[0];
    const topGK = yashinRanking[0];
    const completedTournaments = Object.values(appState.tournaments).filter(t => t.champion);

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Action Bar -->
            <div class="glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 no-print">
                <div>
                    <h2 class="text-base font-bold text-white flex flex-wrap items-center gap-2">
                        <i class="fa-solid fa-crown text-amber-400"></i>
                        <span>Tủ Danh Hiệu (Trophy Cabinet) & Bình Chọn Tự Động</span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                            <i class="fa-solid fa-lock mr-1"></i>Bảo vệ khi Reset
                        </span>
                    </h2>
                    <p class="text-xs text-slate-400 mt-0.5">Tự động tính điểm từ danh hiệu CLB + Bàn thắng + Kiến tạo + Giữ sạch lưới. Giữ nguyên 100% khi Reset mùa giải.</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <button onclick="saveCurrentAwardsSnapshot()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition">
                        <i class="fa-solid fa-award"></i>
                        <span>Chốt Danh Hiệu Mùa Giải</span>
                    </button>
                    <button onclick="exportHonorsCSV()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition">
                        <i class="fa-solid fa-file-csv text-emerald-400"></i>
                        <span>Xuất CSV</span>
                    </button>
                    <button onclick="copyHonorsText()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition">
                        <i class="fa-solid fa-copy text-sky-400"></i>
                        <span>Sao Chép</span>
                    </button>
                    <button onclick="window.print()" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 border border-slate-700 transition">
                        <i class="fa-solid fa-print text-purple-400"></i>
                        <span>In</span>
                    </button>
                </div>
            </div>

            <!-- Quả Bóng Vàng & Thủ Môn Xuất Sắc Nhất -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Ballon d'Or -->
                <div class="rounded-2xl bg-gradient-to-br from-amber-950/70 via-pitch-900 to-pitch-950 border border-amber-500/40 p-5 shadow-xl relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3">
                        <div>
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-extrabold uppercase tracking-wider">
                                <i class="fa-solid fa-futbol"></i> Quả Bóng Vàng (Ballon d'Or)
                            </span>
                            <h3 class="text-xl sm:text-2xl font-black text-white mt-3">
                                ${topPlayer ? escHtml(topPlayer.player) : 'Chưa có dữ liệu thi đấu'}
                            </h3>
                            <p class="text-xs text-amber-300 font-semibold mt-1">
                                ${topPlayer ? `CLB: ${escHtml(topPlayer.team)} • ${topPlayer.goals} Bàn thắng • ${topPlayer.assists} Kiến tạo` : 'Hãy nhập kết quả hoặc mô phỏng trận đấu để hệ thống bình chọn'}
                            </p>
                        </div>
                        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-slate-950 text-2xl shadow-lg shadow-amber-500/30 shrink-0">
                            <i class="fa-solid fa-award"></i>
                        </div>
                    </div>
                    ${topPlayer ? `
                        <div class="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs">
                            <span class="text-slate-300">Danh hiệu CLB: <strong class="text-amber-300">${topPlayer.trophies.length > 0 ? escHtml(topPlayer.trophies.join(', ')) : 'Chưa vô địch'}</strong></span>
                            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-200 font-extrabold">Điểm bầu chọn: ${topPlayer.score}</span>
                        </div>
                    ` : ''}
                    ${ballonDorRanking.length > 1 ? `
                        <div class="mt-3 space-y-1.5">
                            ${ballonDorRanking.slice(1, 5).map((p, i) => `
                                <div class="flex items-center justify-between text-xs px-3 py-1.5 rounded-lg bg-black/30">
                                    <span class="text-slate-200 truncate"><strong>#${i + 2}</strong> ${escHtml(p.player)} <span class="text-slate-400">(${escHtml(p.team)})</span></span>
                                    <span class="text-amber-400 font-bold shrink-0">${p.goals}G / ${p.assists}A • ${p.score}đ</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>

                <!-- Yashin Trophy / Golden Glove -->
                <div class="rounded-2xl bg-gradient-to-br from-sky-950/70 via-pitch-900 to-pitch-950 border border-sky-500/40 p-5 shadow-xl relative overflow-hidden">
                    <div class="flex items-start justify-between gap-3">
                        <div>
                            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[11px] font-extrabold uppercase tracking-wider">
                                <i class="fa-solid fa-hands"></i> Thủ Môn Xuất Sắc Nhất (Yashin Trophy)
                            </span>
                            <h3 class="text-xl sm:text-2xl font-black text-white mt-3">
                                ${topGK ? escHtml(topGK.player) : 'Chưa có dữ liệu thi đấu'}
                            </h3>
                            <p class="text-xs text-sky-300 font-semibold mt-1">
                                ${topGK ? `CLB: ${escHtml(topGK.team)} • ${topGK.cs} Trận Giữ Sạch Lưới (Clean Sheets)` : 'Tự động tính khi đội nhà giữ sạch lưới trong các trận đấu'}
                            </p>
                        </div>
                        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-sky-500/30 shrink-0">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                    </div>
                    ${topGK ? `
                        <div class="mt-4 pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs">
                            <span class="text-slate-300">Danh hiệu CLB: <strong class="text-sky-300">${topGK.trophies.length > 0 ? escHtml(topGK.trophies.join(', ')) : 'Chưa vô địch'}</strong></span>
                            <span class="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-200 font-extrabold">Điểm bầu chọn: ${topGK.score}</span>
                        </div>
                    ` : ''}
                    ${yashinRanking.length > 1 ? `
                        <div class="mt-3 space-y-1.5">
                            ${yashinRanking.slice(1, 5).map((g, i) => `
                                <div class="flex items-center justify-between text-xs px-3 py-1.5 rounded-lg bg-black/30">
                                    <span class="text-slate-200 truncate"><strong>#${i + 2}</strong> ${escHtml(g.player)} <span class="text-slate-400">(${escHtml(g.team)})</span></span>
                                    <span class="text-sky-400 font-bold shrink-0">${g.cs} CS • ${g.score}đ</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>

            <!-- Danh Sách Các Nhà Vô Địch Giải Đấu -->
            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-base font-extrabold text-white flex items-center gap-2">
                        <i class="fa-solid fa-trophy text-amber-400"></i>
                        <span>Bảng Trao Danh Hiệu Cho CLB Vô Địch (${completedTournaments.length})</span>
                    </h3>
                    <span class="text-[11px] text-amber-400 font-semibold"><i class="fa-solid fa-lock mr-1"></i>Giữ nguyên khi xóa dữ liệu thi đấu</span>
                </div>
                ${completedTournaments.length > 0 ? `
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        ${completedTournaments.map(t => `
                            <div class="p-4 rounded-xl bg-pitch-900/90 border border-amber-500/30 flex items-center justify-between">
                                <div>
                                    <p class="text-[11px] font-bold text-amber-400 uppercase">${escHtml(t.shortName)}</p>
                                    <p class="text-base font-extrabold text-white mt-0.5">${escHtml(t.champion)}</p>
                                </div>
                                <i class="fa-solid fa-trophy text-2xl text-amber-400"></i>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <p class="text-xs text-slate-400 bg-pitch-900/60 p-4 rounded-xl border border-slate-800">
                        Chưa có giải đấu nào trao cúp. Hãy mở menu 3 gạch bên trái, chọn một giải đấu và nhấn <strong>"Trao Cúp Vô Địch"</strong>.
                    </p>
                `}
            </div>

            ${appState.honorsHistory.length > 0 ? `
                <div class="glass-card rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-base font-extrabold text-white flex items-center gap-2">
                            <i class="fa-solid fa-clock-rotate-left text-emerald-400"></i>
                            <span>Lịch Sử Cúp & Danh Hiệu Các Mùa Trước Đó (${appState.honorsHistory.length})</span>
                        </h3>
                        <span class="text-[11px] text-emerald-400 font-semibold"><i class="fa-solid fa-shield-halved mr-1"></i>Trophy Cabinet Bất Biến</span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs">
                            <thead class="text-slate-400 border-b border-slate-800">
                                <tr>
                                    <th class="py-2.5 px-3">Mùa Giải</th>
                                    <th class="py-2.5 px-3 text-amber-400">Quả Bóng Vàng</th>
                                    <th class="py-2.5 px-3 text-sky-400">Thủ Môn Xuất Sắc Nhất</th>
                                    <th class="py-2.5 px-3">Các Nhà Vô Địch</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800/70">
                                ${appState.honorsHistory.map(h => `
                                    <tr class="hover:bg-slate-800/40">
                                        <td class="py-2.5 px-3 font-bold text-white">${escHtml(h.seasonName)}</td>
                                        <td class="py-2.5 px-3 text-amber-300 font-semibold">${escHtml(h.ballonDor)}</td>
                                        <td class="py-2.5 px-3 text-sky-300 font-semibold">${escHtml(h.yashin)}</td>
                                        <td class="py-2.5 px-3 text-slate-300">${escHtml(h.championsSummary)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================================================
// 7. VIEW: CHI TIẾT GIẢI ĐẤU (BXH, LỊCH THI ĐẤU, TOP GHI BÀN, KIẾN TẠO)
// ============================================================================
let selectedRoundFilter = 'all';

function renderTournamentView(container, tournament) {
    const { standings, topScorers, topAssists, cleanSheets } = calculateTournamentStats(tournament.id);
    const totalMatches = tournament.matches.length;
    const playedCount = tournament.matches.filter(m => m.played).length;
    const progressPct = totalMatches > 0 ? Math.round((playedCount / totalMatches) * 100) : 0;

    const rounds = [...new Set(tournament.matches.map(m => m.round))].sort((a, b) => a - b);
    const filteredMatches = selectedRoundFilter === 'all'
        ? tournament.matches
        : tournament.matches.filter(m => String(m.round) === String(selectedRoundFilter));

    container.innerHTML = `
        <div class="space-y-5">
            <!-- Tournament Top Control Banner -->
            <div class="glass-card rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            ${playedCount}/${totalMatches} trận (${progressPct}%)
                        </span>
                        ${tournament.champion ? `
                            <span class="px-3 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                🏆 Vô Địch: ${escHtml(tournament.champion)}
                            </span>
                        ` : ''}
                    </div>
                    <div class="w-full sm:w-72 h-2 bg-slate-800 rounded-full mt-2.5 overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300" style="width: ${progressPct}%"></div>
                    </div>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <button onclick="simulateNextRound('${escAttr(tournament.id)}')" class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 transition">
                        <i class="fa-solid fa-forward-step"></i>
                        <span>Mô Phỏng 1 Vòng</span>
                    </button>
                    <button onclick="simulateAllMatches('${escAttr(tournament.id)}')" class="px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition">
                        <i class="fa-solid fa-angles-right"></i>
                        <span>Mô Phỏng Toàn Giải</span>
                    </button>
                    ${tournament.id !== 'ucl' && tournament.isBuiltIn ? `
                        <button onclick="promoteTop4ToUCL('${escAttr(tournament.id)}')" class="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition">
                            <i class="fa-solid fa-star"></i>
                            <span>Đưa Top 4 Lên Cúp C1</span>
                        </button>
                    ` : ''}
                    <button onclick="completeAndCrownChampion('${escAttr(tournament.id)}')" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 transition">
                        <i class="fa-solid fa-trophy"></i>
                        <span>Trao Cúp Vô Địch</span>
                    </button>
                    <button onclick="confirmResetSingleTournament('${escAttr(tournament.id)}')" class="px-3 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-400 text-xs font-bold flex items-center gap-1.5 transition" title="Chỉ xóa lịch thi đấu, tỷ số và BXH của riêng giải này">
                        <i class="fa-solid fa-rotate-left"></i>
                        <span>Reset Giải Này</span>
                    </button>
                </div>
            </div>

            <!-- Main Layout: Standings & Fixtures on Left, Top Scorers & Assists on Right -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div class="lg:col-span-8 space-y-5">
                    <!-- Sub-tabs -->
                    <div class="flex gap-2 bg-pitch-900 p-1.5 rounded-xl border border-slate-800 w-fit">
                        <button onclick="appState.activeTab='standings'; renderMainView();" class="px-4 py-2 rounded-lg text-xs font-bold transition ${appState.activeTab === 'standings' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
                            <i class="fa-solid fa-list-ol mr-1.5"></i>Bảng Xếp Hạng
                        </button>
                        <button onclick="appState.activeTab='fixtures'; renderMainView();" class="px-4 py-2 rounded-lg text-xs font-bold transition ${appState.activeTab === 'fixtures' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'}">
                            <i class="fa-solid fa-calendar-days mr-1.5"></i>Lịch Thi Đấu (${totalMatches})
                        </button>
                    </div>

                    ${appState.activeTab === 'standings' ? `
                        <div class="glass-card rounded-2xl overflow-hidden">
                            <div class="p-4 border-b border-slate-800 flex items-center justify-between">
                                <h3 class="text-sm font-extrabold text-white">Bảng Xếp Hạng Trực Tiếp</h3>
                                <span class="text-[11px] text-emerald-400 font-semibold">
                                    ${tournament.id === 'ucl' ? 'Top 8 vào thẳng Vòng 1/8 • Top 9-24 Play-off' : 'Top 4 giành vé dự Cúp C1'}
                                </span>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-xs">
                                    <thead class="bg-pitch-950/70 text-slate-400 uppercase text-[10px]">
                                        <tr>
                                            <th class="py-3 px-3">#</th>
                                            <th class="py-3 px-3">Câu Lạc Bộ</th>
                                            <th class="py-3 px-2 text-center">Tr</th>
                                            <th class="py-3 px-2 text-center">T</th>
                                            <th class="py-3 px-2 text-center">H</th>
                                            <th class="py-3 px-2 text-center">B</th>
                                            <th class="py-3 px-2 text-center">BT</th>
                                            <th class="py-3 px-2 text-center">BB</th>
                                            <th class="py-3 px-2 text-center">HS</th>
                                            <th class="py-3 px-3 text-center text-white font-black">ĐIỂM</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-800/60">
                                        ${standings.map((row, idx) => {
                                            const isTop4 = tournament.id !== 'ucl' && idx < 4;
                                            const isUCLTop8 = tournament.id === 'ucl' && idx < 8;
                                            const isUCLPlayoff = tournament.id === 'ucl' && idx >= 8 && idx < 24;
                                            const rankBadge = isTop4 || isUCLTop8
                                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                                : isUCLPlayoff
                                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                                                : 'bg-slate-800 text-slate-400';
                                            return `
                                                <tr class="hover:bg-slate-800/40 transition">
                                                    <td class="py-2.5 px-3">
                                                        <span class="w-6 h-6 rounded-lg inline-flex items-center justify-center font-extrabold text-[11px] ${rankBadge}">${idx + 1}</span>
                                                    </td>
                                                    <td class="py-2.5 px-3 font-bold text-white">
                                                        <button data-club="${escAttr(row.team)}" onclick="openClubSquadModal(this.dataset.club)" class="hover:text-emerald-400 transition text-left flex items-center gap-1.5">
                                                            <span>${escHtml(row.team)}</span>
                                                            ${tournament.champion === row.team ? '<i class="fa-solid fa-crown text-amber-400"></i>' : ''}
                                                        </button>
                                                    </td>
                                                    <td class="py-2.5 px-2 text-center text-slate-300">${row.played}</td>
                                                    <td class="py-2.5 px-2 text-center text-emerald-400 font-semibold">${row.won}</td>
                                                    <td class="py-2.5 px-2 text-center text-slate-400">${row.drawn}</td>
                                                    <td class="py-2.5 px-2 text-center text-rose-400">${row.lost}</td>
                                                    <td class="py-2.5 px-2 text-center text-slate-300">${row.gf}</td>
                                                    <td class="py-2.5 px-2 text-center text-slate-300">${row.ga}</td>
                                                    <td class="py-2.5 px-2 text-center font-semibold ${row.gd >= 0 ? 'text-emerald-400' : 'text-rose-400'}">${row.gd > 0 ? '+' + row.gd : row.gd}</td>
                                                    <td class="py-2.5 px-3 text-center font-black text-sm text-white">${row.points}</td>
                                                </tr>
                                            `;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ` : `
                        <div class="glass-card rounded-2xl p-4 space-y-4">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <h3 class="text-sm font-extrabold text-white">Lịch Thi Đấu & Nhập Tỷ Số</h3>
                                <select onchange="selectedRoundFilter = this.value; renderMainView();" class="bg-pitch-950 border border-slate-700 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500">
                                    <option value="all" ${selectedRoundFilter === 'all' ? 'selected' : ''}>Tất cả các vòng (${rounds.length} vòng)</option>
                                    ${rounds.map(r => `<option value="${r}" ${String(selectedRoundFilter) === String(r) ? 'selected' : ''}>Vòng ${r}</option>`).join('')}
                                </select>
                            </div>

                            <div class="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                                ${filteredMatches.map(m => `
                                    <div class="p-3 rounded-xl bg-pitch-950/80 border ${m.played ? 'border-emerald-500/25' : 'border-slate-800'} flex flex-col sm:flex-row items-center justify-between gap-2.5">
                                        <div class="flex items-center gap-2 text-[11px] text-slate-400 shrink-0">
                                            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">V${m.round}</span>
                                            <span>${escHtml(m.stage)}</span>
                                        </div>

                                        <div class="flex items-center justify-center gap-2 flex-1 w-full">
                                            <span class="text-xs font-bold text-white text-right flex-1 truncate">${escHtml(m.home)}</span>
                                            <div class="flex items-center gap-1.5 shrink-0">
                                                <input type="number" min="0" max="99" value="${m.homeScore !== null ? m.homeScore : ''}"
                                                    onchange="quickUpdateMatchScore('${escAttr(tournament.id)}', '${escAttr(m.id)}', 'home', this.value)"
                                                    placeholder="-"
                                                    class="w-11 h-8 text-center rounded-lg bg-pitch-850 border border-slate-700 text-white font-extrabold text-xs focus:border-emerald-500 focus:outline-none">
                                                <span class="text-slate-500 font-bold">:</span>
                                                <input type="number" min="0" max="99" value="${m.awayScore !== null ? m.awayScore : ''}"
                                                    onchange="quickUpdateMatchScore('${escAttr(tournament.id)}', '${escAttr(m.id)}', 'away', this.value)"
                                                    placeholder="-"
                                                    class="w-11 h-8 text-center rounded-lg bg-pitch-850 border border-slate-700 text-white font-extrabold text-xs focus:border-emerald-500 focus:outline-none">
                                            </div>
                                            <span class="text-xs font-bold text-white text-left flex-1 truncate">${escHtml(m.away)}</span>
                                        </div>

                                        <button onclick="openMatchDetailModal('${escAttr(tournament.id)}', '${escAttr(m.id)}')" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-[11px] font-bold shrink-0 transition">
                                            <i class="fa-solid fa-pen-to-square mr-1"></i>Ghi Bàn / Kiến Tạo
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `}
                </div>

                <!-- Right Column: Top Scorers, Top Assists, Clean Sheets -->
                <div class="lg:col-span-4 space-y-5">
                    <!-- Top Ghi Bàn -->
                    <div class="glass-card rounded-2xl p-4">
                        <h3 class="text-sm font-extrabold text-white flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-futbol text-emerald-400"></i>
                            <span>Top Ghi Bàn (Vua Phá Lưới)</span>
                        </h3>
                        ${topScorers.length > 0 ? `
                            <div class="space-y-2">
                                ${topScorers.slice(0, 10).map((s, idx) => `
                                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-pitch-950/80 border border-slate-800/80 text-xs">
                                        <div class="min-w-0 pr-2">
                                            <p class="font-bold text-white truncate">
                                                <span class="text-emerald-400 mr-1">#${idx + 1}</span> ${escHtml(s.player)}
                                            </p>
                                            <p class="text-[11px] text-slate-400 truncate">${escHtml(s.team)}</p>
                                        </div>
                                        <span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-black shrink-0">${s.count} bàn</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `<p class="text-xs text-slate-400">Chưa có bàn thắng nào được ghi.</p>`}
                    </div>

                    <!-- Top Kiến Tạo -->
                    <div class="glass-card rounded-2xl p-4">
                        <h3 class="text-sm font-extrabold text-white flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-handshake-angle text-sky-400"></i>
                            <span>Top Kiến Tạo (Vua Kiến Tạo)</span>
                        </h3>
                        ${topAssists.length > 0 ? `
                            <div class="space-y-2">
                                ${topAssists.slice(0, 10).map((a, idx) => `
                                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-pitch-950/80 border border-slate-800/80 text-xs">
                                        <div class="min-w-0 pr-2">
                                            <p class="font-bold text-white truncate">
                                                <span class="text-sky-400 mr-1">#${idx + 1}</span> ${escHtml(a.player)}
                                            </p>
                                            <p class="text-[11px] text-slate-400 truncate">${escHtml(a.team)}</p>
                                        </div>
                                        <span class="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 font-black shrink-0">${a.count} KT</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `<p class="text-xs text-slate-400">Chưa có kiến tạo nào được ghi nhận.</p>`}
                    </div>

                    <!-- Thủ Môn Giữ Sạch Lưới -->
                    <div class="glass-card rounded-2xl p-4">
                        <h3 class="text-sm font-extrabold text-white flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-hands text-amber-400"></i>
                            <span>Thủ Môn Giữ Sạch Lưới</span>
                        </h3>
                        ${cleanSheets.length > 0 ? `
                            <div class="space-y-2">
                                ${cleanSheets.slice(0, 6).map((c, idx) => `
                                    <div class="flex items-center justify-between p-2.5 rounded-xl bg-pitch-950/80 border border-slate-800/80 text-xs">
                                        <div class="min-w-0 pr-2">
                                            <p class="font-bold text-white truncate">#${idx + 1} ${escHtml(c.player)}</p>
                                            <p class="text-[11px] text-slate-400 truncate">${escHtml(c.team)}</p>
                                        </div>
                                        <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-black shrink-0">${c.count} CS</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `<p class="text-xs text-slate-400">Chưa có dữ liệu giữ sạch lưới.</p>`}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================================
// 8. VIEW: TẤT CẢ 130+ CÂU LẠC BỘ & ĐỘI HÌNH RA SÂN CHÍNH
// ============================================================================
let clubSearchQuery = '';
let clubLeagueFilter = 'all';

function renderAllClubsView(container) {
    const masterClubs = Object.values(getMasterClubsMap());
    const { clubTrophies } = calculateGlobalAwards();
    const filtered = masterClubs.filter(c => {
        const matchLeague = clubLeagueFilter === 'all' || c.leagueId === clubLeagueFilter;
        const q = clubSearchQuery.toLowerCase().trim();
        const matchText = !q || c.name.toLowerCase().includes(q) || c.players.some(p => p.toLowerCase().includes(q));
        return matchLeague && matchText;
    });

    container.innerHTML = `
        <div class="space-y-5">
            <div class="glass-card rounded-2xl p-4 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
                <div class="relative flex-1">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input type="text" value="${escAttr(clubSearchQuery)}" oninput="clubSearchQuery = this.value; renderAllClubsView(document.getElementById('mainContent'));"
                        placeholder="Tìm theo tên CLB (VD: Arsenal FC, Real Madrid CF, Viet Nam...) hoặc cầu thủ (VD: Messi, Ronaldo, Quang Hai)..."
                        class="w-full pl-9 pr-4 py-2.5 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none">
                </div>
                <select onchange="clubLeagueFilter = this.value; renderAllClubsView(document.getElementById('mainContent'));"
                    class="bg-pitch-950 border border-slate-700 text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-emerald-500">
                    <option value="all" ${clubLeagueFilter === 'all' ? 'selected' : ''}>Tất cả CLB (${masterClubs.length} đội)</option>
                    <option value="custom-clubs" ${clubLeagueFilter === 'custom-clubs' ? 'selected' : ''}>CLB Tự Tạo Gốc (${(appState.customClubs || []).length})</option>
                    ${RAW_LEAGUES_DATA.map(lg => `<option value="${lg.id}" ${clubLeagueFilter === lg.id ? 'selected' : ''}>${escHtml(lg.shortName)} (${lg.teams.length})</option>`).join('')}
                </select>
                <button onclick="openCreateCustomClubModal()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20 shrink-0 transition">
                    <i class="fa-solid fa-shield-heart"></i>
                    <span>Tạo CLB Tự Tạo Gốc</span>
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${filtered.map(club => {
                    const trophies = clubTrophies[club.name] || [];
                    return `
                        <div class="glass-card rounded-2xl p-4 flex flex-col justify-between hover:border-emerald-500/40 transition">
                            <div>
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                                            ${escHtml(club.leagueName)} • Sơ đồ ${escHtml(club.formation)}
                                        </span>
                                        <h3 class="text-base font-black text-white mt-1.5">${escHtml(club.name)}</h3>
                                    </div>
                                    <span class="text-[11px] px-2 py-1 rounded-lg bg-pitch-950 border border-slate-800 text-slate-300 font-bold shrink-0">
                                        ${club.players.length} cầu thủ
                                    </span>
                                </div>

                                ${trophies.length > 0 ? `
                                    <div class="mt-2 flex flex-wrap gap-1">
                                        ${trophies.map(tr => `<span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">🏆 ${escHtml(tr)}</span>`).join('')}
                                    </div>
                                ` : ''}

                                <div class="mt-3 pt-3 border-t border-slate-800/80">
                                    <p class="text-[11px] font-bold text-slate-400 mb-1.5">Đội hình xuất phát:</p>
                                    <div class="flex flex-wrap gap-1">
                                        ${club.players.slice(0, 6).map((p, idx) => `
                                            <span class="text-[11px] px-2 py-0.5 rounded-md ${idx === 0 ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30' : 'bg-pitch-950 text-slate-300 border border-slate-800'}">
                                                ${idx === 0 ? '🧤 ' : ''}${escHtml(p)}
                                            </span>
                                        `).join('')}
                                        ${club.players.length > 6 ? `<span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">+${club.players.length - 6} cầu thủ</span>` : ''}
                                    </div>
                                </div>
                            </div>

                            <button data-club="${escAttr(club.name)}" onclick="openClubSquadModal(this.dataset.club)" class="mt-4 w-full py-2 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white text-xs font-bold transition">
                                Xem Đầy Đủ Đội Hình & Danh Hiệu
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// ============================================================================
// 9. VIEW: TẠO GIẢI ĐẤU MỚI ĐA THỂ THỨC
// ============================================================================
function renderCreateTournamentView(container) {
    const masterClubs = Object.values(getMasterClubsMap());

    container.innerHTML = `
        <div class="max-w-3xl mx-auto glass-card rounded-2xl p-5 sm:p-6 space-y-5">
            <div>
                <h2 class="text-lg font-black text-white">Khởi Tạo Giải Đấu Mới</h2>
                <p class="text-xs text-slate-400 mt-0.5">Chọn thể thức thi đấu và các câu lạc bộ từ danh sách 130+ CLB hiện có.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">Tên Giải Đấu</label>
                    <input id="newTourName" type="text" placeholder="VD: Siêu Cúp Liên Lục Địa 2026"
                        class="w-full px-3.5 py-2.5 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1.5">Thể Thức Thi Đấu</label>
                    <select id="newTourFormat" class="w-full px-3.5 py-2.5 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none">
                        <option value="league">Vòng tròn tính điểm (1 lượt - League)</option>
                        <option value="double-league">Vòng tròn lượt đi & lượt về (2 lượt)</option>
                        <option value="group-knockout">Chia bảng đấu cúp (Group Stage + Knockout)</option>
                        <option value="swiss">Thể thức Swiss Cúp C1 mới</option>
                        <option value="double-elimination">Nhánh thắng - Nhánh thua (Double Elimination)</option>
                    </select>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between mb-2">
                    <label class="text-xs font-bold text-slate-300">Chọn Các CLB Tham Dự (<span id="selectedTeamsCount" class="text-emerald-400">0</span> đội)</label>
                    <div class="flex gap-2">
                        <button type="button" onclick="quickSelectTeams(8)" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-emerald-400">Chọn Nhanh 8 Đội</button>
                        <button type="button" onclick="quickSelectTeams(16)" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-sky-400">Chọn Nhanh 16 Đội</button>
                        <button type="button" onclick="quickSelectTeams(0)" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-rose-400">Bỏ Chọn</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-72 overflow-y-auto p-3 rounded-xl bg-pitch-950 border border-slate-800">
                    ${masterClubs.map(c => `
                        <label class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800/70 cursor-pointer text-xs">
                            <input type="checkbox" value="${escAttr(c.name)}" onchange="updateSelectedTeamsCounter()" class="new-tour-team-cb rounded text-emerald-500 bg-slate-900 border-slate-700">
                            <span class="truncate text-slate-200">${escHtml(c.name)}</span>
                        </label>
                    `).join('')}
                </div>
            </div>

            <div class="flex justify-end gap-3 pt-2">
                <button onclick="navigateView('honors')" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold">Hủy</button>
                <button onclick="createNewCustomTournament()" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-lg shadow-emerald-600/20">
                    <i class="fa-solid fa-check mr-1.5"></i>Tạo Giải & Sinh Lịch Thi Đấu
                </button>
            </div>
        </div>
    `;
}

function updateSelectedTeamsCounter() {
    const count = document.querySelectorAll('.new-tour-team-cb:checked').length;
    const el = document.getElementById('selectedTeamsCount');
    if (el) el.textContent = count;
}

function quickSelectTeams(count) {
    const cbs = Array.from(document.querySelectorAll('.new-tour-team-cb'));
    cbs.forEach((cb, idx) => { cb.checked = idx < count; });
    updateSelectedTeamsCounter();
}

function createNewCustomTournament() {
    const nameInput = document.getElementById('newTourName').value.trim();
    const format = document.getElementById('newTourFormat').value;
    const selectedTeams = Array.from(document.querySelectorAll('.new-tour-team-cb:checked')).map(cb => cb.value);

    if (!nameInput) {
        showToast('Vui lòng nhập tên giải đấu!', 'error');
        return;
    }
    if (selectedTeams.length < 2) {
        showToast('Vui lòng chọn ít nhất 2 câu lạc bộ!', 'error');
        return;
    }

    const id = 'custom_' + Date.now();
    let matches = [];
    if (format === 'group-knockout') matches = generateGroupKnockoutMatches(selectedTeams);
    else if (format === 'double-elimination') matches = generateDoubleEliminationMatches(selectedTeams);
    else if (format === 'swiss') matches = generateSwissLeagueMatches(selectedTeams, 6);
    else matches = generateRoundRobinMatches(selectedTeams, format === 'double-league');

    appState.tournaments[id] = {
        id,
        name: nameInput,
        shortName: nameInput,
        badge: '🏆',
        color: 'from-emerald-600 to-teal-800',
        format,
        isBuiltIn: false,
        teams: selectedTeams,
        matches,
        champion: null,
        completed: false
    };

    triggerCloudAutoSave();
    showToast(`Đã tạo giải đấu "${nameInput}" với ${matches.length} trận đấu!`, 'success');
    navigateView('tournament', id);
}

// ============================================================================
// 10. TƯƠNG TÁC TRẬN ĐẤU, MÔ PHỎNG, TRAO CÚP & MODAL CHI TIẾT
// ============================================================================
function syncMatchGoalEventsWithScore(match) {
    const masterClubs = getMasterClubsMap();
    if (!match.events) match.events = [];

    const homeGoals = match.events.filter(e => e.type === 'goal' && e.team === match.home);
    const awayGoals = match.events.filter(e => e.type === 'goal' && e.team === match.away);

    if (homeGoals.length < match.homeScore && masterClubs[match.home]) {
        const players = masterClubs[match.home].players;
        const diff = match.homeScore - homeGoals.length;
        for (let i = 0; i < diff; i++) {
            const scorer = players[players.length - 1 - (i % 4)] || players[players.length - 1];
            const assister = players[players.length - 2 - (i % 4)] || players[1];
            match.events.push({ type: 'goal', player: scorer, team: match.home });
            if (assister && assister !== scorer) {
                match.events.push({ type: 'assist', player: assister, team: match.home });
            }
        }
    } else if (homeGoals.length > match.homeScore) {
        let toRemove = homeGoals.length - match.homeScore;
        match.events = match.events.filter(e => {
            if (toRemove > 0 && e.type === 'goal' && e.team === match.home) {
                toRemove--;
                return false;
            }
            return true;
        });
    }

    if (awayGoals.length < match.awayScore && masterClubs[match.away]) {
        const players = masterClubs[match.away].players;
        const diff = match.awayScore - awayGoals.length;
        for (let i = 0; i < diff; i++) {
            const scorer = players[players.length - 1 - (i % 4)] || players[players.length - 1];
            const assister = players[players.length - 2 - (i % 4)] || players[1];
            match.events.push({ type: 'goal', player: scorer, team: match.away });
            if (assister && assister !== scorer) {
                match.events.push({ type: 'assist', player: assister, team: match.away });
            }
        }
    } else if (awayGoals.length > match.awayScore) {
        let toRemove = awayGoals.length - match.awayScore;
        match.events = match.events.filter(e => {
            if (toRemove > 0 && e.type === 'goal' && e.team === match.away) {
                toRemove--;
                return false;
            }
            return true;
        });
    }
}

function quickUpdateMatchScore(tournamentId, matchId, side, rawVal) {
    const t = appState.tournaments[tournamentId];
    if (!t) return;
    const m = t.matches.find(x => x.id === matchId);
    if (!m) return;

    if (rawVal === '') {
        if (side === 'home') m.homeScore = null;
        else m.awayScore = null;
        if (m.homeScore === null && m.awayScore === null) {
            m.played = false;
            m.events = [];
        }
    } else {
        const num = Math.max(0, parseInt(rawVal, 10) || 0);
        if (side === 'home') {
            m.homeScore = num;
            if (m.awayScore === null) m.awayScore = 0;
        } else {
            m.awayScore = num;
            if (m.homeScore === null) m.homeScore = 0;
        }
        m.played = true;
        syncMatchGoalEventsWithScore(m);
    }
    triggerCloudAutoSave();
    renderMainView();
}

function openMatchDetailModal(tournamentId, matchId) {
    const t = appState.tournaments[tournamentId];
    const m = t.matches.find(x => x.id === matchId);
    const masterClubs = getMasterClubsMap();
    const homePlayers = masterClubs[m.home]?.players || [];
    const awayPlayers = masterClubs[m.away]?.players || [];

    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div>
                <span class="text-[11px] font-bold text-emerald-400 uppercase">Vòng ${m.round} • ${escHtml(t.shortName)}</span>
                <h3 class="text-base font-black text-white">${escHtml(m.home)} vs ${escHtml(m.away)}</h3>
            </div>
            <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="grid grid-cols-3 items-center gap-3 bg-pitch-950 p-4 rounded-xl border border-slate-800 mb-4">
            <div class="text-center">
                <p class="text-xs font-extrabold text-white mb-2 truncate">${escHtml(m.home)}</p>
                <input id="modalHomeScore" type="number" min="0" value="${m.homeScore ?? 0}" class="w-16 h-12 text-center text-xl font-black rounded-xl bg-pitch-850 border border-slate-700 text-white">
            </div>
            <div class="text-center text-slate-500 font-black text-lg">VS</div>
            <div class="text-center">
                <p class="text-xs font-extrabold text-white mb-2 truncate">${escHtml(m.away)}</p>
                <input id="modalAwayScore" type="number" min="0" value="${m.awayScore ?? 0}" class="w-16 h-12 text-center text-xl font-black rounded-xl bg-pitch-850 border border-slate-700 text-white">
            </div>
        </div>

        <div class="bg-pitch-950 p-3.5 rounded-xl border border-slate-800 mb-4 space-y-2.5">
            <p class="text-xs font-bold text-slate-300">Ghi Nhận Sự Kiện Cầu Thủ (Ghi Bàn / Kiến Tạo):</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <select id="evTeamSelect" onchange="updateEventPlayerDropdown()" class="bg-pitch-900 border border-slate-700 text-white text-xs rounded-xl px-2.5 py-2">
                    <option value="${escAttr(m.home)}">${escHtml(m.home)}</option>
                    <option value="${escAttr(m.away)}">${escHtml(m.away)}</option>
                </select>
                <select id="evPlayerSelect" class="bg-pitch-900 border border-slate-700 text-white text-xs rounded-xl px-2.5 py-2">
                    ${homePlayers.map(p => `<option value="${escAttr(p)}">${escHtml(p)}</option>`).join('')}
                </select>
                <div class="flex gap-1.5">
                    <button type="button" onclick="addMatchEvent('${escAttr(tournamentId)}', '${escAttr(matchId)}', 'goal')" class="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold">
                        ⚽ +Bàn
                    </button>
                    <button type="button" onclick="addMatchEvent('${escAttr(tournamentId)}', '${escAttr(matchId)}', 'assist')" class="flex-1 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold">
                        👟 +KT
                    </button>
                </div>
            </div>
        </div>

        <div class="space-y-1.5 max-h-44 overflow-y-auto mb-4">
            ${(m.events || []).length > 0 ? m.events.map((ev, i) => `
                <div class="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800/70 text-xs">
                    <span>${ev.type === 'goal' ? '⚽ <strong>Ghi bàn:</strong>' : '👟 <strong>Kiến tạo:</strong>'} ${escHtml(ev.player)} <span class="text-slate-400">(${escHtml(ev.team)})</span></span>
                    <button onclick="removeMatchEvent('${escAttr(tournamentId)}', '${escAttr(matchId)}', ${i})" class="text-rose-400 hover:text-rose-300"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `).join('') : '<p class="text-xs text-slate-500 text-center py-2">Chưa có sự kiện chi tiết nào.</p>'}
        </div>

        <div class="flex justify-between gap-2">
            <button onclick="resetSingleMatch('${escAttr(tournamentId)}', '${escAttr(matchId)}')" class="px-3.5 py-2 rounded-xl bg-rose-500/15 text-rose-400 text-xs font-bold">Xóa Tỷ Số Trận Này</button>
            <button onclick="saveMatchDetailModal('${escAttr(tournamentId)}', '${escAttr(matchId)}')" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold">Lưu Kết Quả</button>
        </div>
    `;

    window._modalMatchContext = { home: m.home, away: m.away, homePlayers, awayPlayers };
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
}

function updateEventPlayerDropdown() {
    const ctx = window._modalMatchContext;
    if (!ctx) return;
    const team = document.getElementById('evTeamSelect').value;
    const list = team === ctx.home ? ctx.homePlayers : ctx.awayPlayers;
    document.getElementById('evPlayerSelect').innerHTML = list.map(p => `<option value="${escAttr(p)}">${escHtml(p)}</option>`).join('');
}

function addMatchEvent(tournamentId, matchId, type) {
    const t = appState.tournaments[tournamentId];
    const m = t.matches.find(x => x.id === matchId);
    const team = document.getElementById('evTeamSelect').value;
    const player = document.getElementById('evPlayerSelect').value;

    if (!m.events) m.events = [];
    m.events.push({ type, player, team });

    if (type === 'goal') {
        const hInput = document.getElementById('modalHomeScore');
        const aInput = document.getElementById('modalAwayScore');
        if (team === m.home) hInput.value = (parseInt(hInput.value, 10) || 0) + 1;
        else aInput.value = (parseInt(aInput.value, 10) || 0) + 1;
    }

    m.homeScore = parseInt(document.getElementById('modalHomeScore').value, 10) || 0;
    m.awayScore = parseInt(document.getElementById('modalAwayScore').value, 10) || 0;
    m.played = true;

    triggerCloudAutoSave();
    openMatchDetailModal(tournamentId, matchId);
    renderMainView();
}

function removeMatchEvent(tournamentId, matchId, index) {
    const t = appState.tournaments[tournamentId];
    const m = t.matches.find(x => x.id === matchId);
    m.events.splice(index, 1);
    triggerCloudAutoSave();
    openMatchDetailModal(tournamentId, matchId);
    renderMainView();
}

function saveMatchDetailModal(tournamentId, matchId) {
    const t = appState.tournaments[tournamentId];
    const m = t.matches.find(x => x.id === matchId);
    m.homeScore = Math.max(0, parseInt(document.getElementById('modalHomeScore').value, 10) || 0);
    m.awayScore = Math.max(0, parseInt(document.getElementById('modalAwayScore').value, 10) || 0);
    m.played = true;
    syncMatchGoalEventsWithScore(m);
    triggerCloudAutoSave();
    closeModal();
    renderMainView();
    showToast(`Đã cập nhật tỷ số ${m.home} ${m.homeScore} - ${m.awayScore} ${m.away}`, 'success');
}

function resetSingleMatch(tournamentId, matchId) {
    const t = appState.tournaments[tournamentId];
    const m = t.matches.find(x => x.id === matchId);
    m.homeScore = null;
    m.awayScore = null;
    m.played = false;
    m.events = [];
    triggerCloudAutoSave();
    closeModal();
    renderMainView();
}

function simulateNextRound(tournamentId) {
    const t = appState.tournaments[tournamentId];
    const unplayedRounds = [...new Set(t.matches.filter(m => !m.played).map(m => m.round))].sort((a, b) => a - b);
    if (unplayedRounds.length === 0) {
        showToast('Tất cả các vòng đấu đã hoàn tất!', 'info');
        return;
    }
    const targetRound = unplayedRounds[0];
    t.matches.filter(m => m.round === targetRound && !m.played).forEach(m => {
        m.homeScore = Math.floor(Math.random() * 4);
        m.awayScore = Math.floor(Math.random() * 3);
        m.played = true;
        syncMatchGoalEventsWithScore(m);
    });
    triggerCloudAutoSave();
    renderMainView();
    showToast(`Đã mô phỏng xong Vòng ${targetRound}!`, 'success');
}

function simulateAllMatches(tournamentId) {
    const t = appState.tournaments[tournamentId];
    t.matches.filter(m => !m.played).forEach(m => {
        m.homeScore = Math.floor(Math.random() * 4);
        m.awayScore = Math.floor(Math.random() * 3);
        m.played = true;
        syncMatchGoalEventsWithScore(m);
    });
    triggerCloudAutoSave();
    renderMainView();
    showToast(`Đã mô phỏng xong toàn bộ lịch thi đấu của ${t.shortName}!`, 'success');
}

function completeAndCrownChampion(tournamentId) {
    const t = appState.tournaments[tournamentId];
    const { standings } = calculateTournamentStats(tournamentId);
    if (standings.length === 0) return;

    const champ = standings[0].team;
    t.champion = champ;
    t.completed = true;
    triggerCloudAutoSave();
    renderMainView();
    showToast(`🏆 Chúc mừng ${champ} đã lên ngôi vô địch ${t.shortName}!`, 'success');
}

function promoteTop4ToUCL(tournamentId) {
    const { standings } = calculateTournamentStats(tournamentId);
    const top4 = standings.slice(0, 4).map(s => s.team);
    const ucl = appState.tournaments['ucl'];

    top4.forEach(team => {
        if (!ucl.teams.includes(team)) {
            ucl.teams.push(team);
        }
    });
    ucl.matches = generateSwissLeagueMatches(ucl.teams, 8);
    triggerCloudAutoSave();
    showToast(`Top 4 (${top4.join(', ')}) đã được đưa vào UEFA Champions League (Cúp C1)!`, 'success');
}

// ============================================================================
// 11. MODAL CHI TIẾT CLB & THÊM CẦU THỦ TỰ TẠO GỐC / TẠO CLB TỰ TẠO GỐC
// ============================================================================
function openClubSquadModal(clubName) {
    const club = getMasterClubsMap()[clubName];
    if (!club) return;
    const { clubTrophies, ballonDorRanking, yashinRanking } = calculateGlobalAwards();
    const trophies = clubTrophies[clubName] || [];

    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div>
                <span class="text-[11px] font-bold text-emerald-400 uppercase">${escHtml(club.leagueName)} • Sơ đồ ${escHtml(club.formation)}</span>
                <h3 class="text-lg font-black text-white">${escHtml(club.name)}</h3>
            </div>
            <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="mb-4 p-3 rounded-xl bg-pitch-950 border border-slate-800">
            <p class="text-xs font-bold text-amber-400 mb-1.5"><i class="fa-solid fa-trophy mr-1"></i>Danh Hiệu CLB & Cá Nhân Đã Đạt Được:</p>
            <div class="flex flex-wrap gap-1.5">
                ${trophies.length > 0 ? trophies.map(tr => `<span class="text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold">🏆 Vô địch ${escHtml(tr)}</span>`).join('') : '<span class="text-xs text-slate-400">Chưa có cúp vô địch</span>'}
                ${ballonDorRanking[0]?.team === clubName ? `<span class="text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-200 font-bold">⚽ Quả Bóng Vàng: ${escHtml(ballonDorRanking[0].player)}</span>` : ''}
                ${yashinRanking[0]?.team === clubName ? `<span class="text-xs px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-200 font-bold">🧤 Thủ Môn Xuất Sắc Nhất: ${escHtml(yashinRanking[0].player)}</span>` : ''}
            </div>
        </div>

        <div class="mb-4">
            <p class="text-xs font-bold text-slate-300 mb-2">Đội hình ra sân chính & Cầu thủ tự tạo gốc (Được bảo vệ không thể xóa):</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${club.players.map((p, idx) => {
                    const isBase = idx < club.basePlayers.length;
                    return `
                        <div class="flex items-center justify-between px-3 py-2 rounded-xl bg-pitch-950 border ${idx === 0 ? 'border-amber-500/40' : 'border-slate-800'} text-xs">
                            <span class="font-semibold text-white">
                                <span class="text-slate-500 mr-1.5">#${idx + 1}</span>
                                ${idx === 0 ? '🧤 ' : ''}${escHtml(p)}
                            </span>
                            ${isBase
                                ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400"><i class="fa-solid fa-lock mr-1"></i>Gốc</span>'
                                : '<span class="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold"><i class="fa-solid fa-lock mr-1"></i>Custom Gốc</span>'
                            }
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <div class="bg-pitch-900 p-3.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row gap-2">
            <input id="newPlayerNameInput" type="text" placeholder="Nhập tên cầu thủ tự tạo gốc mới cho ${escAttr(club.name)}..."
                class="flex-1 px-3 py-2 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none">
            <button data-club="${escAttr(club.name)}" onclick="addCustomPlayerToClub(this.dataset.club)" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0">
                <i class="fa-solid fa-plus mr-1"></i>Thêm Cầu Thủ Gốc
            </button>
        </div>
    `;

    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
}

function addCustomPlayerToClub(clubName) {
    const input = document.getElementById('newPlayerNameInput');
    const name = input.value.trim();
    if (!name) return;

    if (!appState.customPlayersByTeam[clubName]) appState.customPlayersByTeam[clubName] = [];
    appState.customPlayersByTeam[clubName].push(name);
    triggerCloudAutoSave();
    openClubSquadModal(clubName);
    showToast(`Đã thêm cầu thủ tự tạo gốc ${name} vào ${clubName} (được bảo vệ khi Reset)!`, 'success');
}

function openCreateCustomClubModal() {
    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
            <div>
                <span class="text-[11px] font-bold text-emerald-400 uppercase"><i class="fa-solid fa-lock mr-1"></i>Được bảo vệ bất biến khi Reset</span>
                <h3 class="text-lg font-black text-white">Tạo Mẫu Câu Lạc Bộ Tự Tạo Gốc</h3>
            </div>
            <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1">Tên Câu Lạc Bộ Mới</label>
                    <input id="customClubNameInput" type="text" placeholder="VD: Hà Nội FC / Sài Gòn United..."
                        class="w-full px-3 py-2 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-300 mb-1">Sơ đồ chiến thuật</label>
                    <select id="customClubFormationInput" class="w-full px-3 py-2 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white">
                        <option value="4-3-3">4-3-3</option>
                        <option value="4-2-3-1">4-2-3-1</option>
                        <option value="4-4-2">4-4-2</option>
                        <option value="3-4-2-1">3-4-2-1</option>
                        <option value="3-5-2">3-5-2</option>
                    </select>
                </div>
            </div>
            <div>
                <label class="block text-xs font-bold text-slate-300 mb-1">Danh sách 11 cầu thủ ra sân chính (cách nhau bởi dấu phẩy, cầu thủ đầu tiên là Thủ môn)</label>
                <textarea id="customClubPlayersInput" rows="3" placeholder="VD: Nguyễn Filip (1 GK), Thành Chung (CB), Duy Mạnh (CB), Văn Hậu (LB), Xuân Mạnh (RB), Hùng Dũng (CMF), Hoàng Đức (CMF), Quang Hải (AMF), Tuấn Hải (LW), Văn Toàn (RW), Tiến Linh (CF)"
                    class="w-full px-3 py-2 rounded-xl bg-pitch-950 border border-slate-700 text-xs text-white focus:border-emerald-500 focus:outline-none"></textarea>
            </div>
            <div class="flex justify-end gap-2 pt-2">
                <button onclick="closeModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">Hủy</button>
                <button onclick="saveNewCustomClub()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg">
                    <i class="fa-solid fa-check mr-1"></i>Lưu CLB Tự Tạo Gốc
                </button>
            </div>
        </div>
    `;
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
}

function saveNewCustomClub() {
    const name = document.getElementById('customClubNameInput').value.trim();
    const formation = document.getElementById('customClubFormationInput').value;
    const rawPlayers = document.getElementById('customClubPlayersInput').value.trim();
    if (!name) {
        showToast('Vui lòng nhập tên Câu Lạc Bộ!', 'error');
        return;
    }
    if (getMasterClubsMap()[name]) {
        showToast('Tên Câu Lạc Bộ này đã tồn tại!', 'error');
        return;
    }
    const players = rawPlayers
        ? rawPlayers.split(',').map(p => p.trim()).filter(Boolean)
        : [`Thủ môn ${name} (1 GK)`, 'Hậu vệ 2', 'Hậu vệ 3', 'Hậu vệ 4', 'Hậu vệ 5', 'Tiền vệ 6', 'Tiền vệ 7', 'Tiền vệ 8', 'Tiền đạo 9', 'Tiền đạo 10', 'Tiền đạo 11'];

    if (!appState.customClubs) appState.customClubs = [];
    appState.customClubs.push({ name, formation, players, country: 'Tự Tạo' });
    triggerCloudAutoSave();
    closeModal();
    renderMainView();
    showToast(`Đã tạo CLB tự tạo gốc "${name}" (được bảo vệ khi Reset)!`, 'success');
}

// ============================================================================
// 12. CHỐT DANH HIỆU, XUẤT CSV & SMART RESET (GIỮ NGUYÊN CLB GỐC & LỊCH SỬ CÚP)
// ============================================================================
function saveCurrentAwardsSnapshot() {
    const { ballonDorRanking, yashinRanking } = calculateGlobalAwards();
    const champions = Object.values(appState.tournaments)
        .filter(t => t.champion)
        .map(t => `${t.shortName}: ${t.champion}`);

    const snapshot = {
        id: 'season_' + Date.now(),
        seasonName: `Mùa Giải #${appState.honorsHistory.length + 1}`,
        ballonDor: ballonDorRanking[0] ? `${ballonDorRanking[0].player} (${ballonDorRanking[0].team} - ${ballonDorRanking[0].score}đ)` : 'Chưa có',
        yashin: yashinRanking[0] ? `${yashinRanking[0].player} (${yashinRanking[0].team} - ${yashinRanking[0].cs} CS)` : 'Chưa có',
        championsSummary: champions.length > 0 ? champions.join(' | ') : 'Chưa trao cúp giải đấu'
    };

    appState.honorsHistory.unshift(snapshot);
    triggerCloudAutoSave();
    renderMainView();
    showToast('Đã chốt danh hiệu mùa giải lên Tủ Danh Hiệu (Trophy Cabinet)!', 'success');
}

function exportHonorsCSV() {
    const { ballonDorRanking, yashinRanking } = calculateGlobalAwards();
    let csv = '\uFEFFHang Muc,Ten Cau Thu / CLB,CLB Chu Quan,Thong So,Diem Binh Chon\n';
    Object.values(appState.tournaments).filter(t => t.champion).forEach(t => {
        csv += `Vo Dich ${t.shortName},"${t.champion}","${t.champion}",Vo Dich,100\n`;
    });
    ballonDorRanking.slice(0, 15).forEach((p, i) => {
        csv += `Qua Bong Vang #${i + 1},"${p.player}","${p.team}",${p.goals}G / ${p.assists}A,${p.score}\n`;
    });
    yashinRanking.slice(0, 10).forEach((g, i) => {
        csv += `Thu Mon Xuat Sac #${i + 1},"${g.player}","${g.team}",${g.cs} Clean Sheets,${g.score}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Thong_Ke_Danh_Hieu_Giai_Dau.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Đã xuất bảng thống kê danh hiệu CSV!', 'success');
}

function copyHonorsText() {
    const { ballonDorRanking, yashinRanking } = calculateGlobalAwards();
    const lines = ['=== BẢNG VINH DANH & DANH HIỆU GIẢI ĐẤU ==='];
    Object.values(appState.tournaments).filter(t => t.champion).forEach(t => {
        lines.push(`🏆 Vô địch ${t.shortName}: ${t.champion}`);
    });
    if (ballonDorRanking[0]) lines.push(`⚽ Quả Bóng Vàng: ${ballonDorRanking[0].player} (${ballonDorRanking[0].team} - ${ballonDorRanking[0].score}đ)`);
    if (yashinRanking[0]) lines.push(`🧤 Thủ Môn Xuất Sắc Nhất: ${yashinRanking[0].player} (${yashinRanking[0].team} - ${yashinRanking[0].cs} CS)`);

    const text = lines.join('\n');
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Đã sao chép bảng vinh danh vào bộ nhớ tạm!', 'success');
}

function confirmResetSingleTournament(tournamentId) {
    const t = appState.tournaments[tournamentId];
    if (!t) return;
    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <div class="text-center space-y-4 py-2">
            <div class="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mx-auto">
                <i class="fa-solid fa-rotate-left"></i>
            </div>
            <h3 class="text-lg font-extrabold text-white">Xóa Tiến Trình Của Riêng Giải "${escHtml(t.shortName)}"?</h3>
            <p class="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                • Chỉ xóa lịch thi đấu, tỷ số các trận đã đá và đưa bảng xếp hạng của riêng <strong>${escHtml(t.shortName)}</strong> về 0 điểm.<br>
                • <strong class="text-emerald-400">Giữ nguyên 100%</strong> tiến trình các giải khác, danh sách CLB/cầu thủ gốc & tự tạo, và Lịch sử Cúp & Danh hiệu (Trophy Cabinet).
            </p>
            <div class="flex justify-center gap-3 pt-2">
                <button onclick="closeModal()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold">Hủy Bỏ</button>
                <button onclick="executeResetSingleTournament('${escAttr(tournamentId)}')" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-lg">
                    Đồng Ý Reset Giải Này
                </button>
            </div>
        </div>
    `;
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
}

function executeResetSingleTournament(tournamentId) {
    const t = appState.tournaments[tournamentId];
    if (!t) return;

    if (t.format === 'group-knockout') t.matches = generateGroupKnockoutMatches(t.teams);
    else if (t.format === 'double-elimination') t.matches = generateDoubleEliminationMatches(t.teams);
    else if (t.format === 'swiss') t.matches = generateSwissLeagueMatches(t.teams, 8);
    else t.matches = generateRoundRobinMatches(t.teams, t.format === 'double-league');

    t.completed = false;
    triggerCloudAutoSave();
    closeModal();
    renderMainView();
    showToast(`Đã reset lịch thi đấu & BXH của ${t.shortName} về 0 điểm! Các giải khác và Trophy Cabinet được giữ nguyên.`, 'success');
}

function confirmResetTournamentData() {
    toggleDrawer(false);
    const currentT = appState.activeView === 'tournament' ? appState.tournaments[appState.activeTournamentId] : null;
    const modalBox = document.getElementById('modalBox');
    modalBox.innerHTML = `
        <div class="space-y-4 py-2">
            <div class="text-center">
                <div class="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-2xl mx-auto mb-3">
                    <i class="fa-solid fa-rotate-left"></i>
                </div>
                <h3 class="text-lg font-extrabold text-white">Xóa Dữ Liệu Thi Đấu (Bắt Đầu Mùa Mới)</h3>
                <p class="text-xs text-slate-300 leading-relaxed max-w-lg mx-auto mt-1">
                    Chỉ xóa kết quả trận đấu, lịch thi đấu và điểm số của mùa vừa qua để đưa BXH về 0 điểm.<br>
                    <strong class="text-emerald-400"><i class="fa-solid fa-lock mr-1"></i>GIỮ NGUYÊN 100%:</strong> Toàn bộ 130 CLB gốc, CLB & Cầu thủ tự tạo gốc (Custom Teams/Players), và Lịch sử Cúp & Danh hiệu (Trophy Cabinet).
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                ${currentT ? `
                    <button onclick="executeResetSingleTournament('${escAttr(currentT.id)}')" class="p-3.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-left transition">
                        <p class="text-xs font-extrabold text-amber-300"><i class="fa-solid fa-filter mr-1"></i>Chỉ Xóa Riêng Giải "${escHtml(currentT.shortName)}"</p>
                        <p class="text-[11px] text-slate-400 mt-1">Đưa BXH & lịch thi đấu của riêng giải này về 0 điểm.</p>
                    </button>
                ` : ''}
                <button onclick="executeResetTournamentData()" class="${currentT ? '' : 'sm:col-span-2'} p-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-left text-white shadow-lg transition">
                    <p class="text-xs font-extrabold"><i class="fa-solid fa-arrows-rotate mr-1"></i>Xóa Dữ Liệu Thi Đấu Tất Cả Các Giải</p>
                    <p class="text-[11px] text-rose-100 mt-1">Đưa toàn bộ BXH & tỷ số về 0 điểm (Giữ nguyên CLB/Cầu thủ & Trophy Cabinet).</p>
                </button>
            </div>

            <div class="text-center pt-1">
                <button onclick="closeModal()" class="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold">Đóng</button>
            </div>
        </div>
    `;
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('modalBackdrop').classList.add('flex');
}

function executeResetTournamentData() {
    const preservedChampions = {};
    Object.values(appState.tournaments).forEach(t => {
        if (t.champion) preservedChampions[t.id] = t.champion;
    });

    const freshTournaments = buildDefaultTournaments();
    Object.keys(preservedChampions).forEach(tid => {
        if (freshTournaments[tid]) {
            freshTournaments[tid].champion = preservedChampions[tid];
        }
    });

    appState.tournaments = freshTournaments;
    triggerCloudAutoSave();
    closeModal();
    renderMainView();
    showToast('Đã xóa dữ liệu thi đấu về 0 điểm! CLB/Cầu thủ tự tạo gốc và Lịch sử Cúp & Danh hiệu được giữ nguyên.', 'success');
}

function closeModal() {
    const backdrop = document.getElementById('modalBackdrop');
    backdrop.classList.add('hidden');
    backdrop.classList.remove('flex');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const colors = type === 'error'
        ? 'bg-rose-950/95 border-rose-500/50 text-rose-200'
        : type === 'info'
        ? 'bg-sky-950/95 border-sky-500/50 text-sky-200'
        : 'bg-emerald-950/95 border-emerald-500/50 text-emerald-200';

    toast.className = `pointer-events-auto px-4 py-3 rounded-xl border shadow-2xl text-xs font-semibold flex items-center gap-2.5 backdrop-blur-md transition-all ${colors}`;
    toast.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-xmark' : 'fa-circle-check'}"></i><span>${escHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3400);
}

// ============================================================================
// 13. VERSIONED SNAPSHOT SYSTEM – LƯU NHIỀU PHIÊN BẢN & KHÔI PHỤC
// ============================================================================
const SNAPSHOT_STORAGE_KEY = 'football_manager_snapshots_v1';
const SNAPSHOT_LIMIT = 40;
let snapshotDebounce = null;

function readSnapshots() {
    try {
        const value = JSON.parse(localStorage.getItem(SNAPSHOT_STORAGE_KEY) || '[]');
        return Array.isArray(value) ? value : [];
    } catch (error) {
        console.warn('Không đọc được danh sách snapshot:', error);
        return [];
    }
}

function writeSnapshots(items) {
    localStorage.setItem(SNAPSHOT_STORAGE_KEY, JSON.stringify(items.slice(0, SNAPSHOT_LIMIT)));
    updateSnapshotUI();
}

function createSnapshot(label = 'Tự động') {
    try {
        const snapshots = readSnapshots();
        const serialized = JSON.stringify(appState);
        const latest = snapshots[0];
        // Tránh tạo phiên bản trùng dữ liệu liên tiếp
        if (latest && latest.data === serialized) return latest;
        const item = {
            id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2)),
            label,
            createdAt: new Date().toISOString(),
            data: serialized
        };
        snapshots.unshift(item);
        writeSnapshots(snapshots);
        return item;
    } catch (error) {
        showToast('Không thể tạo bản sao lưu: ' + error.message, 'error');
        return null;
    }
}

function triggerCloudAutoSave() {
    clearTimeout(snapshotDebounce);
    snapshotDebounce = setTimeout(() => createSnapshot('Tự động'), 1200);
}

function updateSnapshotUI() {
    const snapshots = readSnapshots();
    const latest = snapshots[0];
    const header = document.getElementById('headerCloudStatus');
    const badge = document.getElementById('drawerSnapshotBadge');
    const content = document.getElementById('drawerSnapshotContent');
    if (header) {
        header.innerHTML = `
            <button onclick="createManualSnapshot()" class="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow transition">
                <i class="fa-solid fa-camera"></i><span class="hidden sm:inline">Tạo Snapshot</span>
            </button>`;
    }
    if (badge) badge.textContent = snapshots.length + ' phiên bản';
    if (content) {
        content.innerHTML = `
            <p class="text-[10px] text-slate-400">${latest ? 'Bản gần nhất: ' + escHtml(new Date(latest.createdAt).toLocaleString('vi-VN')) : 'Chưa có bản sao lưu'}</p>
            <button onclick="createManualSnapshot()" class="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"><i class="fa-solid fa-camera mr-1"></i>Tạo bản sao lưu ngay</button>
            <button onclick="showSnapshotHistory()" class="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Xem / khôi phục phiên bản</button>
            <button onclick="exportSnapshots()" class="w-full py-2 px-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-bold text-xs"><i class="fa-solid fa-download mr-1"></i>Xuất file sao lưu</button>
            <button onclick="document.getElementById('snapshotImportFile').click()" class="w-full py-2 px-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs"><i class="fa-solid fa-upload mr-1"></i>Nhập file / khôi phục</button>
            <input id="snapshotImportFile" type="file" accept="application/json,.json" class="hidden" onchange="importSnapshotsFile(event)">
        `;
    }
}

function createManualSnapshot() {
    const item = createSnapshot('Thủ công');
    if (item) showToast('Đã tạo phiên bản sao lưu!', 'success');
}

function showSnapshotHistory() {
    const snapshots = readSnapshots();
    if (!snapshots.length) {
        showToast('Chưa có phiên bản nào để khôi phục.', 'info');
        return;
    }
    const options = snapshots.map((item, index) =>
        `${index + 1}. ${new Date(item.createdAt).toLocaleString('vi-VN')} — ${item.label}`
    ).join('\n');
    const answer = prompt('Nhập số phiên bản muốn khôi phục:\n\n' + options);
    if (answer === null || answer.trim() === '') return;
    const index = Number(answer) - 1;
    if (!Number.isInteger(index) || index < 0 || index >= snapshots.length) {
        showToast('Số phiên bản không hợp lệ.', 'error');
        return;
    }
    if (!confirm('Khôi phục phiên bản đã chọn? Trạng thái hiện tại sẽ được lưu thành một snapshot trước khi khôi phục.')) return;
    createSnapshot('Trước khi khôi phục');
    try {
        const restored = JSON.parse(snapshots[index].data);
        if (!restored || typeof restored !== 'object' || !('tournaments' in restored)) throw new Error('Tệp snapshot không hợp lệ');
        appState = restored;
        createSnapshot('Khôi phục: ' + snapshots[index].label);
        renderMainView();
        showToast('Đã khôi phục trạng thái thành công!', 'success');
    } catch (error) {
        showToast('Không thể khôi phục: ' + error.message, 'error');
    }
}

function exportSnapshots() {
    createSnapshot('Trước khi xuất');
    const payload = {
        format: 'football-manager-snapshot',
        version: 1,
        exportedAt: new Date().toISOString(),
        snapshots: readSnapshots()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'football-manager-snapshots-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất file sao lưu Snapshot.', 'success');
}

function importSnapshotsFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const parsed = JSON.parse(reader.result);
            const incoming = Array.isArray(parsed) ? parsed : parsed.snapshots;
            if (!Array.isArray(incoming) || !incoming.length) throw new Error('Không tìm thấy dữ liệu snapshot');
            const valid = incoming.filter(x => x && typeof x.data === 'string' && x.createdAt);
            if (!valid.length) throw new Error('File không chứa snapshot hợp lệ');
            if (!confirm(`Nhập ${valid.length} phiên bản? Các phiên bản hiện có sẽ được giữ lại.`)) return;
            const merged = [...valid, ...readSnapshots()].slice(0, SNAPSHOT_LIMIT);
            writeSnapshots(merged);
            showToast('Đã nhập các phiên bản sao lưu. Chọn “Xem / khôi phục phiên bản” để khôi phục.', 'success');
        } catch (error) {
            showToast('File sao lưu không hợp lệ: ' + error.message, 'error');
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsText(file);
}

function loadLatestSnapshot() {
    const latest = readSnapshots()[0];
    if (!latest) return false;
    try {
        const restored = JSON.parse(latest.data);
        if (!restored || typeof restored !== 'object' || !('tournaments' in restored)) return false;
        appState = restored;
        return true;
    } catch (error) {
        console.warn('Snapshot gần nhất bị lỗi:', error);
        return false;
    }
}

// Khởi chạy ứng dụng
window.addEventListener('DOMContentLoaded', () => {
    appState.tournaments = buildDefaultTournaments();
    loadLatestSnapshot();
    updateSnapshotUI();
    renderMainView();
    if (!readSnapshots().length) createSnapshot('Khởi tạo');
});
