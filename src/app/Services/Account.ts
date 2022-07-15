import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResultViewModel } from "../models/ResultViewModel";
import { Student, StudentCreateViewModel, StudentEditViewModel } from "../models/SignUp";

@Injectable()
export class StudentServices{
    constructor(private http:HttpClient){}
    url:string=environment.apiURl
    addStudent(Student:StudentCreateViewModel){
        return this.http.post<ResultViewModel>(this.url+ "Student/post",Student)
    }
    getStudent(){
        return this.http.get<ResultViewModel>( environment.apiURl+"Student/get")
    }
    getStudentById(id:number){
        return this.http.get<ResultViewModel>( environment.apiURl+"Student/getbyid?id="+id)
    }
    getStudentEditableByID(id:number){
        return this.http.get<ResultViewModel>( environment.apiURl+"Student/GetEditableByID?id="+id)
    }
    deleteStudent(id:number){
        return this.http.delete<ResultViewModel>(this.url+ "Student/delete?id="+id)
    }
    updateStudent(Student:StudentEditViewModel){
        return this.http.put<ResultViewModel>(this.url+"Student/put",Student)
    }
}
