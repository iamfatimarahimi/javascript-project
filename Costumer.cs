using System;

namespace CustomerMaskGifts
{
    class Program
    {
        static void Main(string[] args)
        {
           int costumer = 30;
           countMask = 0;
           for (int i = 1; i < costumer; i++){
                Console.WriteLine("آیا مشتری {i} ماسک دارد؟ (بله/خیر):" , i)
                check = Console.ReadLine();
                if(check=="بله"){
                    countMask++;
                    Console.WriteLine("مشتری {i} یک کیسه پارچه‌ای هدیه می‌گیرد." , i);
                }
           }
           Console.WriteLine("تعداد مشتریانی که ماسک داشتند: {maskCount}" , maskCount);

            Console.ReadLine();
        }
    }
}