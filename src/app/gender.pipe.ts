import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "gender"
})
export class GenderPipe implements PipeTransform {
  transform(mainname: string, gender: any): string {
    let capitalisedName =
      mainname.charAt(0).toUpperCase() +
      mainname.slice(1, mainname.indexOf(" ")) +
      " " +
      mainname.charAt(mainname.indexOf(" ") + 1).toUpperCase() +
      mainname.slice(mainname.indexOf(" ") + 2);

    return gender === "Male"
      ? "Mr ".concat(capitalisedName)
      : "Miss ".concat(capitalisedName);
  }
}
