import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class ConfigService {
    
    _apiURI : string;

    constructor() {
           this._apiURI = 'http://localhost:5001/api/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/','http://localhost:4200/');
     }

     getHeaders(): Headers {
        let token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyNmViM2I5NjdjMTljMGEyZDczY2MwYTcyNDBlNzEwIiwidHlwIjoiSldUIn0.eyJuYmYiOjE0OTcyMzY0NzQsImV4cCI6MTQ5NzI0MDA3NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjpbImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9yZXNvdXJjZXMiLCJhcGkiXSwiY2xpZW50X2lkIjoicm8uY2xpZW50Iiwic3ViIjoiNDAyNjA5YTYtODU3ZC00MzM2LWU1MjQtMDhkNDcxZGM2ODU1IiwiYXV0aF90aW1lIjoxNDk3MjM2NDc0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjM3ZTc5ZTQ2LTQwZDItNDVlYS1lNTgzLTA4ZDQ3NmY5M2ZmOSIsInRlbmFudCI6ImJlYTVkZjAwLWQzMzEtNDRkMy05ZTdiLTI3OGRmN2UwNzdhYSIsInRlbmFudF9uYW1lIjoiU3lzdGVtIiwidGVuYW50X3VybEFsaWFzIjoic3lzdGVtIiwiZ2l2ZW5fbmFtZSI6IlN5c3RlbSIsInN1cmVuYW1lIjoiQWRtaW5pc3RyYXRvciIsImVtYWlsX2FkZHJlc3MiOiJhZG1pbkB3cGdtYWlsLmNvbSIsInNjb3BlIjpbImFwaSJdLCJhbXIiOlsiY3VzdG9tIl19.Vygdxj14LsSzqbCk9wMoLIoZFmuEpiJ9GQeK6oEMOOjU6Km-XBTfog9yiCgCzYTBYZFZWpdA0DXsm6_wLxHVzh9RXzPNYgu1_L-5qasWDihzKb4E6-M3YvFSgGMpBFg9tyiw0ScjIfDzClCy8XLujHqeN3YVBIkP46HWxlHF1jcmtaTQnOln4otsujAzOJ_UNK9rEbIsBLfnfB_sC9ydWoNu-II6xV-ERcxV8e6TYDqoruNr6FEp08yjJrzN0CoA3x4B5QaJ_lZN_s0CbQ9mRzXxjjficgPJC6T1m4Rsi3OxJ_H5ur_zT47DBcMcyiW8P9jJjBTzx6_T5QuIpWVnHQ'
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);

        return headers;
     }

     getTenant() : string {
        return "Microsoft";
     }


   

}