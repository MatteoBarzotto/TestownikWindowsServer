const questions = [
    {
        "question": "Która edycja Windows Server 2016 pozwala na uruchomienie nieograniczonej liczby maszyn wirtualnych?",
        "A": "Standard",
        "B": "Datacenter",
        "C": "Essentials",
        "D": "Storage",
        "correct": "B"
    },
    {
        "question": "Gdzie przechowywane są skrypty logowania w domenie AD?",
        "A": "C:\\Windows\\SYSVOL\\domain\\scripts",
        "B": "C:\\Scripts\\Domain",
        "C": "C:\\ProgramData\\Scripts",
        "D": "C:\\Windows\\Logs\\Logon",
        "correct": "A"
    },
    {
        "question": "Który port wykorzystywany jest przez protokół SMB bez NetBIOS?",
        "A": "80",
        "B": "139",
        "C": "443",
        "D": "445",
        "correct": "D"
    },
    {
        "question": "Który z systemów plików oferuje największą odporność na błędy i skalowalność?",
        "A": "FAT32",
        "B": "NTFS",
        "C": "ReFS",
        "D": "exFAT",
        "correct": "C"
    },
    {
        "question": "Co oznacza skrót ACL?",
        "A": "Access Configuration Level",
        "B": "Advanced Control Layer",
        "C": "Access Control List",
        "D": "Account Check Logic",
        "correct": "C"
    },
    {
        "question": "Które z poniższych NIE jest typem zapytania DNS?",
        "A": "Rekurencyjne",
        "B": "Iteracyjne",
        "C": "Nierekurencyjne",
        "D": "Dwukierunkowe",
        "correct": "D"
    },
    {
        "question": "Co umożliwia DHCPDISCOVER?",
        "A": "Zakończenie sesji",
        "B": "Odnalezienie serwera DHCP",
        "C": "Wysłanie oferty",
        "D": "Zapisanie adresu IP",
        "correct": "B"
    },
    {
        "question": "Który element identyfikuje konkretną maszynę w sieci IP?",
        "A": "Maska podsieci",
        "B": "Identyfikator sieci",
        "C": "Identyfikator hosta",
        "D": "Adres MAC",
        "correct": "C"
    },
    {
        "question": "Które polecenie służy do diagnozowania problemów z rozpoznawaniem nazw DNS?",
        "A": "ipconfig",
        "B": "tracert",
        "C": "ping",
        "D": "nslookup",
        "correct": "D"
    },
    {
        "question": "Co określa sposób organizowania plików na woluminie?",
        "A": "Typ partycji",
        "B": "System plików",
        "C": "Styl dysku",
        "D": "Rodzaj dysku",
        "correct": "B"
    },
    {
        "question": "Jakie są podstawowe fazy protokołu DHCP?",
        "A": "START, ASK, ASSIGN, CONFIRM",
        "B": "DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK",
        "C": "PING, OFFER, ACCEPT, CONNECT",
        "D": "REQ, ACK, REQ, ACK",
        "correct": "B"
    },
    {
        "question": "Jakie są dwa główne typy uprawnień ACE?",
        "A": "Read i Write",
        "B": "Allow i Deny",
        "C": "Static i Dynamic",
        "D": "Grant i Revoke",
        "correct": "B"
    },
    {
        "question": "Który system plików NIE wspiera szyfrowania EFS?",
        "A": "NTFS",
        "B": "ReFS",
        "C": "FAT32",
        "D": "exFAT",
        "correct": "B"
    },
    {
        "question": "Która z poniższych funkcji NIE jest dostępna w ReFS?",
        "A": "Kompresja",
        "B": "Skalowalność",
        "C": "Ochrona integralności",
        "D": "Automatyczna korekcja błędów",
        "correct": "A"
    },
    {
        "question": "Które polecenie służy do sprawdzenia trasy pakietów do hosta?",
        "A": "ping",
        "B": "tracert",
        "C": "ipconfig",
        "D": "route",
        "correct": "B"
    },
    {
        "question": "Które z poniższych NIE jest podstawową rolą GPO?",
        "A": "Standaryzacja środowiska",
        "B": "Instalacja sterowników GPU",
        "C": "Konfiguracja zabezpieczeń",
        "D": "Automatyczne mapowanie dysków",
        "correct": "B"
    },
    {
        "question": "Co oznacza skrót SID w kontekście Windows Server?",
        "A": "System Interface Descriptor",
        "B": "Security Identifier",
        "C": "Service ID",
        "D": "Session Identity Descriptor",
        "correct": "B"
    },
    {
        "question": "Gdzie znajduje się plik 'hosts' w systemach Windows?",
        "A": "C:\\System\\DNS\\hosts",
        "B": "C:\\Windows\\System32\\Drivers\\Etc\\hosts",
        "C": "C:\\Windows\\System\\Network\\hosts",
        "D": "C:\\Config\\hosts",
        "correct": "B"
    },
    {
        "question": "Która funkcja GPO służy do przeniesienia danych użytkownika na serwer?",
        "A": "Group Policy Loopback",
        "B": "Redirect User Folder",
        "C": "Folder Redirection",
        "D": "User Configuration Sync",
        "correct": "C"
    },
    {
        "question": "Które narzędzie umożliwia graficzną konwersję dysku do stylu GPT?",
        "A": "Device Manager",
        "B": "Disk Cleanup",
        "C": "Disk Management",
        "D": "Event Viewer",
        "correct": "C"
    },
    {
        "question": "Która edycja Windows Server 2016 nie wspiera wirtualizacji?",
        "A": "Hyper-V",
        "B": "25 użytkowników",
        "C": "Essentials",
        "D": "Standard",
        "correct": "C"
    },
    {
        "question": "Windows Server 2016 Essentials pozwala na ilu użytkowników?",
        "A": "Hyper-V",
        "B": "25 użytkowników",
        "C": "Essentials",
        "D": "Standard",
        "correct": "B"
    },
    {
        "question": "Która edycja serwera nie posiada GUI i służy wyłącznie do hostowania VM?",
        "A": "Hyper-V",
        "B": "25 użytkowników",
        "C": "Essentials",
        "D": "Standard",
        "correct": "A"
    },
    {
        "question": "Las Active Directory zawiera:",
        "A": "Enterprise Admins",
        "B": "Domeny, OU, Schemat",
        "C": "Domena",
        "D": "Delegowanie zarządzania",
        "correct": "B"
    },
    {
        "question": "Co stanowi granicę replikacji w AD?",
        "A": "Enterprise Admins",
        "B": "Domeny, OU, Schemat",
        "C": "Domena",
        "D": "Delegowanie zarządzania",
        "correct": "C"
    },
    {
        "question": "Która grupa ma pełną kontrolę nad wszystkimi domenami w lesie?",
        "A": "Enterprise Admins",
        "B": "Domeny, OU, Schemat",
        "C": "Domena",
        "D": "Delegowanie zarządzania",
        "correct": "A"
    },
    {
        "question": "Jaka jest rola OU w Active Directory?",
        "A": "Enterprise Admins",
        "B": "Domeny, OU, Schemat",
        "C": "Domena",
        "D": "Delegowanie zarządzania",
        "correct": "D"
    },
    {
        "question": "Jaki rekord DNS odpowiada za aliasy nazw domenowych?",
        "A": "Rekurencyjne",
        "B": "Adres IP",
        "C": "CNAME",
        "D": "Root DNS",
        "correct": "C"
    },
    {
        "question": "Który typ zapytania DNS oczekuje pełnej odpowiedzi od serwera?",
        "A": "Rekurencyjne",
        "B": "Adres IP",
        "C": "CNAME",
        "D": "Root DNS",
        "correct": "A"
    },
    {
        "question": "Rekord A w DNS wskazuje na:",
        "A": "Rekurencyjne",
        "B": "Adres IP",
        "C": "CNAME",
        "D": "Root DNS",
        "correct": "B"
    },
    {
        "question": "Który element DNS jest na samym szczycie hierarchii?",
        "A": "Rekurencyjne",
        "B": "Adres IP",
        "C": "CNAME",
        "D": "Root DNS",
        "correct": "D"
    },
    {
        "question": "Jakie porty wykorzystuje DHCP (IPv4)?",
        "A": "67 i 68 UDP",
        "B": "Rezerwacja IP",
        "C": "Czasowe przypisanie IP",
        "D": "Traci IP",
        "correct": "A"
    },
    {
        "question": "Czym jest dzierżawa DHCP?",
        "A": "67 i 68 UDP",
        "B": "Rezerwacja IP",
        "C": "Czasowe przypisanie IP",
        "D": "Traci IP",
        "correct": "C"
    },
    {
        "question": "Jaką metodą DHCP przypisuje IP na stałe?",
        "A": "67 i 68 UDP",
        "B": "Rezerwacja IP",
        "C": "Czasowe przypisanie IP",
        "D": "Traci IP",
        "correct": "B"
    },
    {
        "question": "Co się stanie, jeśli klient nie odnowi dzierżawy?",
        "A": "67 i 68 UDP",
        "B": "Rezerwacja IP",
        "C": "Czasowe przypisanie IP",
        "D": "Traci IP",
        "correct": "D"
    },
    {
        "question": "Jak często odświeżane są ustawienia GPO?",
        "A": "co 90 minut",
        "B": "centralne przechowywanie danych",
        "C": "podczas logowania",
        "D": "Computer Configuration",
        "correct": "A"
    },
    {
        "question": "Folder Redirection umożliwia:",
        "A": "co 90 minut",
        "B": "centralne przechowywanie danych",
        "C": "podczas logowania",
        "D": "Computer Configuration",
        "correct": "B"
    },
    {
        "question": "Skrypty logowania w GPO wykonywane są:",
        "A": "co 90 minut",
        "B": "centralne przechowywanie danych",
        "C": "podczas logowania",
        "D": "Computer Configuration",
        "correct": "C"
    },
    {
        "question": "Które z ustawień GPO mają zastosowanie niezależnie od użytkownika?",
        "A": "co 90 minut",
        "B": "centralne przechowywanie danych",
        "C": "podczas logowania",
        "D": "Computer Configuration",
        "correct": "D"
    },
    {
        "question": "Co nadpisuje uprawnienia Allow w NTFS?",
        "A": "Jawne",
        "B": "NTFS",
        "C": "Deny",
        "D": "139 i 445",
        "correct": "C"
    },
    {
        "question": "Które uprawnienia są silniejsze – jawne czy dziedziczone?",
        "A": "Jawne",
        "B": "NTFS",
        "C": "Deny",
        "D": "139 i 445",
        "correct": "A"
    },
    {
        "question": "Który system plików obsługuje ACL?",
        "A": "Jawne",
        "B": "NTFS",
        "C": "Deny",
        "D": "139 i 445",
        "correct": "B"
    },
    {
        "question": "Na jakich portach działa SMB?",
        "A": "Jawne",
        "B": "NTFS",
        "C": "Deny",
        "D": "139 i 445",
        "correct": "D"
    },
    {
        "question": "Która edycja Windows Server 2016 jest przeznaczona dla małych firm?",
        "A": "Datacenter",
        "B": "Essentials",
        "C": "Standard",
        "D": "Hyper-V",
        "correct": "B"
    },
    {
        "question": "Ile maksymalnie urządzeń obsługuje Windows Server 2016 Essentials?",
        "A": "25",
        "B": "50",
        "C": "75",
        "D": "100",
        "correct": "B"
    },
    {
        "question": "Która edycja nie zawiera GUI?",
        "A": "Datacenter",
        "B": "Essentials",
        "C": "Storage Server",
        "D": "Hyper-V",
        "correct": "D"
    },
    {
        "question": "Co oznacza LDAP?",
        "A": "Local Directory Access Protocol",
        "B": "Lightweight Directory Access Protocol",
        "C": "Light Data Access Protocol",
        "D": "Linked Directory Access Protocol",
        "correct": "B"
    },
    {
        "question": "Czym jest las w Active Directory?",
        "A": "Grupą kont użytkowników",
        "B": "Jednostką organizacyjną",
        "C": "Zbiorem domen z jednym schematem",
        "D": "Profilem użytkownika",
        "correct": "C"
    },
    {
        "question": "Który komponent AD zawiera użytkowników i komputery?",
        "A": "Las",
        "B": "Domena",
        "C": "Schemat",
        "D": "Partycja",
        "correct": "B"
    },
    {
        "question": "Co zawiera rekord typu A w DNS?",
        "A": "Alias",
        "B": "Adres IP",
        "C": "Serwer poczty",
        "D": "Strefę DNS",
        "correct": "B"
    },
    {
        "question": "Co to jest resolver DNS?",
        "A": "Plik systemowy",
        "B": "Usługa systemowa",
        "C": "Rodzaj serwera",
        "D": "Typ zapytania",
        "correct": "B"
    },
    {
        "question": "Który rekord DNS mapuje domenę na inny rekord?",
        "A": "NS",
        "B": "MX",
        "C": "CNAME",
        "D": "PTR",
        "correct": "C"
    },
    {
        "question": "Jakie pole DHCP klient wysyła na początku procesu?",
        "A": "DHCPREQUEST",
        "B": "DHCPOFFER",
        "C": "DHCPDISCOVER",
        "D": "DHCPACK",
        "correct": "C"
    },
    {
        "question": "Która alokacja DHCP przypisuje adres na podstawie MAC?",
        "A": "Dynamiczna",
        "B": "Automatyczna",
        "C": "Statyczna",
        "D": "Ręczna",
        "correct": "D"
    },
    {
        "question": "Jak często odświeżane są zasady GPO?",
        "A": "Co 30 minut",
        "B": "Co godzinę",
        "C": "Co 90-120 minut",
        "D": "Po zalogowaniu",
        "correct": "C"
    },
    {
        "question": "Która opcja GPO pozwala na przekierowanie folderów użytkownika?",
        "A": "Folder Sync",
        "B": "Home Redirection",
        "C": "Profile Mapping",
        "D": "Folder Redirection",
        "correct": "D"
    },
    {
        "question": "Który system plików wspiera kompresję i szyfrowanie?",
        "A": "FAT32",
        "B": "exFAT",
        "C": "NTFS",
        "D": "ReFS",
        "correct": "C"
    },
    {
        "question": "Jaki jest maksymalny rozmiar pliku w FAT32?",
        "A": "2 GB",
        "B": "4 GB",
        "C": "16 GB",
        "D": "64 GB",
        "correct": "B"
    },
    {
        "question": "Który protokół jest używany do udostępniania plików w sieci Windows?",
        "A": "FTP",
        "B": "HTTP",
        "C": "SMB",
        "D": "NFS",
        "correct": "C"
    },
    {
        "question": "Jakie uprawnienie NTFS pozwala modyfikować pliki?",
        "A": "Read",
        "B": "Execute",
        "C": "Modify",
        "D": "List Folder Contents",
        "correct": "C"
    },
    {
        "question": "Który wpis ACE ma wyższy priorytet?",
        "A": "Dziedziczony",
        "B": "Jawny Allow",
        "C": "Deny",
        "D": "Z grupy",
        "correct": "C"
    },
    {
        "question": "Jakie polecenie w cmd pokazuje konfigurację IP?",
        "A": "ipconfig",
        "B": "ifconfig",
        "C": "tracert",
        "D": "ping",
        "correct": "A"
    },
    {
        "question": "Minimalna ilość RAM dla instalacji Windows Server z GUI to:",
        "A": "512 MB",
        "B": "1 GB",
        "C": "2 GB",
        "D": "4 GB",
        "correct": "C"
    },
    {
        "question": "Które typy dysków są dostępne w Windows Server?",
        "A": "Zwykłe i RAID",
        "B": "MBR i GPT",
        "C": "Podstawowe i dynamiczne",
        "D": "Lokalne i zdalne",
        "correct": "C"
    },
    {
        "question": "Co definiuje styl partycji MBR?",
        "A": "Obsługa do 2 TB",
        "B": "Obsługa 64-bitowa",
        "C": "Do 128 partycji",
        "D": "Szyfrowanie",
        "correct": "A"
    },
    {
        "question": "System plików ReFS został wprowadzony w:",
        "A": "Windows XP",
        "B": "Windows Server 2012",
        "C": "Windows Server 2008",
        "D": "Windows 10",
        "correct": "B"
    },
    {
        "question": "Jaką zmienną można wykorzystać do tworzenia domowych katalogów użytkownika?",
        "A": "%username%",
        "B": "%user%",
        "C": "%homepath%",
        "D": "%domainuser%",
        "correct": "A"
    },
    {
        "question": "Gdzie przechowywany jest logon script w domenie?",
        "A": "C:\\Netlogon",
        "B": "C:\\Windows\\System32",
        "C": "C:\\Windows\\SYSVOL\\domain\\scripts",
        "D": "C:\\DomainScripts",
        "correct": "C"
    },
    {
        "question": "Jak oznaczyć konto-szablon użytkownika?",
        "A": "ADMIN_",
        "B": "_template",
        "C": "U_TPL",
        "D": "UżytkownikT",
        "correct": "B"
    },
    {
        "question": "Czemu służą jednostki organizacyjne (OU)?",
        "A": "Tworzeniu domen",
        "B": "Uwierzytelnieniu użytkowników",
        "C": "Delegowaniu administracji",
        "D": "Synchronizacji kont",
        "correct": "C"
    },
    {
        "question": "Które ustawienia są stosowane niezależnie od użytkownika?",
        "A": "User Settings",
        "B": "Logon Scripts",
        "C": "Computer Configuration",
        "D": "Folder Redirection",
        "correct": "C"
    },
    {
        "question": "Skrypty GPO przy zamykaniu systemu to:",
        "A": "Startup",
        "B": "Shutdown",
        "C": "Logoff",
        "D": "Cleanup",
        "correct": "B"
    },
    {
        "question": "Jak nazywa się serwer DNS przechowujący dane tylko dla własnej strefy?",
        "A": "Root",
        "B": "Rekurencyjny",
        "C": "Autorytatywny",
        "D": "TLD",
        "correct": "C"
    },
    {
        "question": "Czym zajmuje się serwer DHCP?",
        "A": "Przydziela adresy IP",
        "B": "Weryfikuje nazwy",
        "C": "Zarządza logami",
        "D": "Synchronizuje GPO",
        "correct": "A"
    },
    {
        "question": "Który port służy do odpowiedzi DHCP z serwera do klienta?",
        "A": "67",
        "B": "68",
        "C": "546",
        "D": "547",
        "correct": "B"
    },
    {
        "question": "Co to jest CIDR?",
        "A": "Typ zapory sieciowej",
        "B": "Bezklasowy routing międzysieciowy",
        "C": "Zasób DNS",
        "D": "Protokół routingu",
        "correct": "B"
    },
    {
        "question": "Która klasa adresów IPv4 jest używana do multicastów?",
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "D",
        "correct": "D"
    },
    {
        "question": "Co wskazuje maska podsieci?",
        "A": "Granice partycji",
        "B": "Wielkość pliku",
        "C": "Część adresu IP oznaczającą sieć",
        "D": "Typ komputera",
        "correct": "C"
    },
    {
        "question": "Co tworzy lista ACL?",
        "A": "Rejestr użytkowników",
        "B": "Zestaw polityk GPO",
        "C": "Zbiór wpisów ACE",
        "D": "Katalog startowy",
        "correct": "C"
    },
    {
        "question": "Kiedy stosujemy uprawnienia Deny?",
        "A": "Gdy chcemy ograniczyć dziedziczenie",
        "B": "Gdy Allow nie działa",
        "C": "Gdy chcemy zablokować dostęp niezależnie od Allow",
        "D": "Zawsze",
        "correct": "C"
    },
    {
        "question": "Które z poniższych NIE są dziedziczone?",
        "A": "Uprawnienia Allow",
        "B": "Uprawnienia Deny",
        "C": "Jawne ACE",
        "D": "Uprawnienia systemowe",
        "correct": "C"
    },
    {
        "question": "Co oznacza skrót GPO w Windows Server?",
        "A": "General Policy Object",
        "B": "Group Policy Option",
        "C": "Group Policy Object",
        "D": "Global Protocol Organization",
        "correct": "C"
    },
    {
        "question": "Które z poniższych NIE jest elementem fizycznym AD?",
        "A": "Domena",
        "B": "Kontroler domeny",
        "C": "Lokalizacja",
        "D": "Podsieć",
        "correct": "A"
    },
    {
        "question": "Który system plików obsługuje VSS (kopie w tle)?",
        "A": "FAT32",
        "B": "NTFS",
        "C": "ReFS",
        "D": "exFAT",
        "correct": "B"
    },
    {
        "question": "Co określa GUID w systemach dyskowych?",
        "A": "Adres IP",
        "B": "Unikalny identyfikator partycji",
        "C": "Identyfikator katalogu",
        "D": "Rodzaj sieci",
        "correct": "B"
    },
    {
        "question": "Czym różni się wolumin rozruchowy od systemowego?",
        "A": "Zawiera sterowniki",
        "B": "Zawiera dane",
        "C": "Zawiera pliki systemu operacyjnego",
        "D": "Zawiera program rozruchowy",
        "correct": "D"
    },
    {
        "question": "Co umożliwia polityka QoS w GPO?",
        "A": "Kompresję plików",
        "B": "Ustawienie pasma dla aplikacji",
        "C": "Bezpieczny dostęp do plików",
        "D": "Szyfrowanie folderów",
        "correct": "B"
    },
    {
        "question": "Jak działa rekurencyjny serwer DNS?",
        "A": "Wysyła zapytanie do klienta",
        "B": "Przetwarza lokalnie",
        "C": "Odpytuje inne serwery aż znajdzie wynik",
        "D": "Przechowuje tylko bufor",
        "correct": "C"
    },
    {
        "question": "Co oznacza SID w kontekście uprawnień?",
        "A": "System Identity Definition",
        "B": "Security Identifier",
        "C": "System Internal Device",
        "D": "Security Integration Domain",
        "correct": "B"
    },
    {
        "question": "Czym jest wolumin dynamiczny?",
        "A": "Zamiennik partycji podstawowej",
        "B": "Zestawienie dysków RAID",
        "C": "Jednostka logiczna tworzona na dynamicznym dysku",
        "D": "Tymczasowy obszar dysku",
        "correct": "C"
    },
    {
        "question": "Które narzędzie GUI umożliwia tworzenie i inicjowanie dysków?",
        "A": "Task Scheduler",
        "B": "Event Viewer",
        "C": "Disk Management",
        "D": "Device Manager",
        "correct": "C"
    },
    {
        "question": "Do czego służy Volume Shadow Copy Service?",
        "A": "Tworzenia kopii sieciowych",
        "B": "Tworzenia kopii zapasowej plików w tle",
        "C": "Szyfrowania danych",
        "D": "Zarządzania GPO",
        "correct": "B"
    },
    {
        "question": "Która funkcja NTFS pozwala ograniczyć wykorzystanie przestrzeni dyskowej przez użytkownika?",
        "A": "BitLocker",
        "B": "Compression",
        "C": "Quotas",
        "D": "Shadow Copy",
        "correct": "C"
    },
    {
        "question": "Jaka jest główna różnica między NTFS a FAT32?",
        "A": "NTFS nie działa na Windows",
        "B": "FAT32 obsługuje więcej plików",
        "C": "NTFS oferuje zabezpieczenia ACL",
        "D": "FAT32 obsługuje szyfrowanie",
        "correct": "C"
    },
    {
        "question": "Co robi polecenie ipconfig /flushdns?",
        "A": "Zamyka sesję IP",
        "B": "Opróżnia pamięć podręczną DNS",
        "C": "Resetuje adres MAC",
        "D": "Zmienia domyślny serwer",
        "correct": "B"
    },
    {
        "question": "Która warstwa modelu OSI odpowiada za rozpoznawanie nazw DNS?",
        "A": "Aplikacji",
        "B": "Transportowa",
        "C": "Sieci",
        "D": "Łącza danych",
        "correct": "A"
    },
    {
        "question": "Kiedy klient DHCP zaczyna odnawiać dzierżawę?",
        "A": "50% czasu dzierżawy",
        "B": "90% czasu dzierżawy",
        "C": "Na starcie",
        "D": "Po błędzie",
        "correct": "A"
    },
    {
        "question": "Co znajduje się w partycji rozruchowej?",
        "A": "System operacyjny",
        "B": "Pliki strony",
        "C": "Bootmgr i BCD",
        "D": "Dane aplikacji",
        "correct": "C"
    },
    {
        "question": "Czym jest system exFAT?",
        "A": "Zastąpienie NTFS",
        "B": "System plików dla dużych serwerów",
        "C": "System dla nośników zewnętrznych",
        "D": "System szyfrowany",
        "correct": "C"
    },
    {
        "question": "Który typ rekordu DNS wskazuje na serwer poczty?",
        "A": "A",
        "B": "CNAME",
        "C": "NS",
        "D": "MX",
        "correct": "D"
    }
];