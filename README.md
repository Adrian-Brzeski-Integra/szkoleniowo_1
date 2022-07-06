## Junior Frontend Developer<br>

Uruchomienie projektu<br>
 `yarn` <br>
 `yarn start` <br>
<br>
Wraz z odpaleniem projektu uruchomiony zostaje prosty serwer http<br>
W konstruktorze w src/App.js pobierany jest json http://127.0.0.1:8080/pets-data.json ,<br>
następnie wrzucany do state.<br>
<br>
Twoim zadaniem jest zakodowanie projektu graficznego w html/css oraz zapewnienie<br>
za pomocą Reacta dynamicznej obsługi: dodawania, usuwania, filtracji oraz sortowania elementów listy.<br>

![img.png](img.png)

<br>
Projekt dzieli się na dwa widoki: główna lista oraz popup z formularzem.<br>
<br>
- Po wczytaniu na liście muszą wyświetlać się 3 zwierzęta z pets-data.json<br>
- X służy do usuwania elementu listy<br>
- Popup powinien zostać wyświetlony po kliknięciu na guzik +<br>
- Po ponownym kliknięciu na guzik sortowania, kolejność musi się odwracać<br>
- Filtr gatunków powinien zapewniać możliwość powrotu do wyświetlania wszystkich gatunków<br>
- Wszystkie inputy w formularzu poza jedzeniem są wymagane, zapewnij też walidację pola ‘Wiek’, może ono przyjmować wyłącznie liczby całkowite<br>
<br>
Poza zdjęciami zwierząt nie używaj w projekcie innych plików graficznych, możesz zastosować dowolną czcionkę. Zadanie musi zostać wykonane z użyciem React, bazuj na istniejącym kodzie.<br>