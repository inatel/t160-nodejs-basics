export class BMIService {
  static getIndex(weight, height) {
    return weight / (height * height);
  }
}