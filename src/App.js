import './App.css';

// Task Create Sablonunu Ekrana Yazdirmak Icin
// TaskCreate.js Dosyasini Import Ediyoruz
import TaskCreate from './components/TaskCreate';

// Task Listesini Yazdirmak Icin
// TaskList.js Dosyasini Import Ediyoruz
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  /* TaskCreate.js Dosyasinda handleSubmit Fonksiyonundaki
      title ve taskDecription Degiskenlerindeki Degerleri Aliyoruz */
  const createTask = (title, taskDescription) => {

    // Olusturulacak Task Icin Gerekli Bilgileri Duzenliyoruz
    // Ayni Zamanda Girilen Her Task Bilgisini Ve 
    // En Son Girilen Task Bilgisini Tutuyoruz
    const createdTasks = [

      // Olusturulan Task Icin 
      // Ilk Olarak Array Tipi Oldugunu Belirtiyoruz
      ...tasks,
      {

        // Ikinci Olarak Girilen Task a Rasgele id Numarasi Veriyoruz
        id: Math.round(Math.random() * 999999),

        // Ucuncu Olarak Girilen Task in Title Bilgisini Aliyoruz
        title,

        // Dorduncu Olarak Girilen Task in Task Description Bilgisini Aliyoruz
        taskDescription,
      },
    ];

    // Girilen Tum Task Bilgilerini Aliyoruz
    // Ve Bu Fonksiyon Icindeki tasks Degiskenine Atama Yapiyoruz
    setTasks(createdTasks);
  };

  // Eklenen Task lar Icinde id Parametresi Uzerinden
  // Task Bilgisini Aliyoruz
  const deleteTaskById = (id) => {

    // filter Fonksiyonu Ile Silme Isleminden Sonra
    const afterDeletingTasks = tasks.filter((task) => {

      // Silinen Task in id Bilgisi Task Listin Icinde Yoksa
      // Task lari Farkli Bir Array Icine Aliyoruz
      return task.id !== id;
    });

    // Task larin Bulundugu Array i
    // afterDeletingTasks Degiskenini Parametre Olarak Verip
    // setTasks Uzerinden tasks Degiskenine Atama Yapiyoruz
    setTasks(afterDeletingTasks);
  };

  // id Bilgisi Uzerinden Guncellenen Task Bilgilerini Aliyoruz
  const editTaskById = (id, updatedTitle, updatedTaskDescription) => {

    // tasks Degiskeni Uzerinden Gelen 
    // Task in Update Edilmis Halini 
    // map Fonksiyonu Ile Tarama Yapiyoruz
    const updatedTasks = tasks.map((task) => {

      // Update Edilmek Istenilen Task Bilgisi Daha Onceden Var Olan Bilgi Ise
      if (task.id === id) {

        // Update Edilen Task Bilgilerini id Bilgisi Uzerinden
        // Onceki Taks Bilgilerini Update Edilmis Hali Ile Degistiriyoruz
        return { id, title: updatedTitle, taskDescription: updatedTaskDescription };
      }

      // Task in Update Edilmis Halini Donduruyoruz
      return task;
    });

    // Task in Update Edilmis Halini
    // setTasks Degiskenine 
    // updatedTasks Degiskenini Parametre Olarak Veriyoruz
    setTasks(updatedTasks);
  };

  return (
    <div className="App">

      {/* Task Creaate Sablonunu Ekrana Yazdiriyoruz */}
      {/* TaskCreate.js Dosyasinda handleSubmit Fonksiyonundaki
          title ve taskDecription Degiskenlerindeki Degerleri Aliyoruz*/}
      <TaskCreate onCreate={createTask} />
      <h1>Your Tasks</h1>

      {/* TaskList.js Dosyasinda Yapilan Listeleme Isleminde
          Eklenen Tasklari Listeliyoruz */}
      <TaskList
        tasks={tasks}
      
        /* Silinmek Istenilen Task a Verilen id Bilgisini 
          TaskList.js Dosyasindaki TaskList Props Icinden Cagiriyoruz
          onDelete Metoduna Veriyoruz */
        onDelete={deleteTaskById}

        /* Update Edilen Task id Bilgisini 
          TaskList.js Dosyasindaki TaskList Props Icindeki
          onDelete Metoduna Veriyoruz */
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;