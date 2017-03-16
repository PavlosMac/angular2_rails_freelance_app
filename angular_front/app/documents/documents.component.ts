import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
})
export class DocumentsComponent {
  pageTitle: string = "Document dashboard"

  documents: Document[] = [
    {
      title: "My first document",
      description: "some description about something",
      file_url: 'http://google.com/',
      updated_at: '12/12/2112',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Highland_cattle_(tedandjen).jpg'
   },
   {
     title: "My 2nd document",
     description: "some description about something",
     file_url: 'http://google.com/',
     updated_at: '12/12/2112',
     image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Highland_cattle_(tedandjen).jpg'
  },
  {
    title: "My 3rd document",
    description: "some description about something",
    file_url: 'http://google.com/',
    updated_at: '12/12/2112',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Highland_cattle_(tedandjen).jpg'
 }
  ]
}
