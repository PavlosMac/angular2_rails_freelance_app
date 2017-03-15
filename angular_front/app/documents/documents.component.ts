import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents"
  
  documents: Document[] = [
    {
      title: "My first document",
      description: "some description about something",
      file_url: 'http://google.com/',
      updated_at: '12/12/2112',
      image_url: 'http://google.com/'
   },
   {
     title: "My 2nd document",
     description: "some description about something",
     file_url: 'http://google.com/',
     updated_at: '12/12/2112',
     image_url: 'http://google.com/'
  },
  {
    title: "My 3rd document",
    description: "some description about something",
    file_url: 'http://google.com/',
    updated_at: '12/12/2112',
    image_url: 'http://google.com/'
 }
  ]
}
