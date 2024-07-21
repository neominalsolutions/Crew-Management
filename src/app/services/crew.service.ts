import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// DI için
@Injectable({
  providedIn: 'root', // tüm componentlerden erişilebilir
})
export class CrewService {
  crews = [
    {
      id: 1,
      First_Name: 'Ahmet',
      Last_Name: 'Yılmaz',
      Nationality: 'French',
      Title: 'Captain',
      Days_On_Board: 496,
      Daily_Rate: 600,
      Currency: 'USD',
      Total_Income: '297.600',
      Certificates: [
        {
          Title: 'Sertifika 11',
        },
        {
          Title: 'Sertifika 22',
        },
      ],
    },

    {
      id: 2,
      First_Name: 'Mehmet',
      Last_Name: 'Kaya',
      Nationality: 'German',
      Title: 'Engineer',
      Days_On_Board: 244,
      Daily_Rate: 450,
      Currency: 'EUR',
      Total_Income: '109.800',
      Certificates: [
        {
          Title: 'Sertifika 1',
        },
        {
          Title: 'Sertifika 2',
        },
        {
          Title: 'Sertifika 3',
        },
      ],
    },

    {
      id: 3,
      First_Name: 'Mustafa',
      Last_Name: 'Demir',
      Nationality: 'Canadian',
      Title: 'Cooker',
      Days_On_Board: 421,
      Daily_Rate: 380,
      Currency: 'USD',
      Total_Income: '159.980',
      Certificates: [],
    },

    {
      id: 4,
      First_Name: 'Fatma',
      Last_Name: 'Şahin',
      Nationality: 'Turkish',
      Title: 'Mechanicer',
      Days_On_Board: 328,
      Daily_Rate: 240,
      Currency: 'EUR',
      Total_Income: '78.720',
      Certificates: [
        {
          Title: 'Sertifika 111',
        },
      ],
    },

    {
      id: 5,
      First_Name: 'Fatih',
      Last_Name: 'Çelik',
      Nationality: 'Japanese',
      Title: 'Doctor',
      Days_On_Board: 93,
      Daily_Rate: 550,
      Currency: 'USD',
      Total_Income: '51.150',
      Certificates: [
        {
          Title: 'Sertifika 222',
        },
      ],
    },

    // { id: 6, Total_Income: '508.730 USD + 188.520 EUR' },
  ];

  getAll() {
    return of(this.crews);
  }

  getById(id: number) {
    var crew = this.crews.find((x) => x.id == id);
    console.log('crew', crew);
    return of(crew);
  }

  deleteById(id: number) {
    var deleteItem = this.crews.find((x) => x.id == id);

    if (deleteItem) {
      return of({ statusCode: 200, message: 'Silindi' });
    } else {
      return of({ statusCode: 500, message: 'Kayıt Bulunamadı' });
    }
  }

  create(data: any) {
    return of({ statusCode: 200, message: 'Eklendi' });
  }
}
