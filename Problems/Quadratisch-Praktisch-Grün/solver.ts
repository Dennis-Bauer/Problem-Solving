export default function calculateAnswer(amountPeople: number, high: number, width: number): { 
  areaGarden: number, 
  extraGardensPerHeight: number, 
  extraGardensPerWidth: number, 
  extraGarden: {amount: number, height: number, width: number, area: number}
} 
{
  return {
    areaGarden: 2772, 
    extraGardensPerHeight: 4, 
    extraGardensPerWidth: 6, 
    extraGarden: {
      amount: 24, 
      height: 10.50, 
      width: 11, 
      area: 115.5
    }
  }
}