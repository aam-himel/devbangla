import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const AccordionComp = () => {
  return (
    <Accordion type="single" collapsible >
        {/* faq 1 */}
        <AccordionItem value="item-1">
            <AccordionTrigger>আমি কীভাবে W3Schools বা Programiz এর মত সাইটে কোর্স শুরু করতে পারি?</AccordionTrigger>
            <AccordionContent>
            আপনাকে প্রথমে সাইটে নিবন্ধন করতে হবে। এরপর, নির্দিষ্ট প্রোগ্রামিং ভাষা বা টেকনোলজির কোর্স নির্বাচন করে শেখা শুরু করতে পারেন।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-2">
            <AccordionTrigger>এই সাইটগুলোতে কী কী প্রোগ্রামিং ভাষা শেখানো হয়?</AccordionTrigger>
            <AccordionContent>
            এই সাইটগুলোতে HTML, CSS, JavaScript, Python, Java, C++, SQL, এবং অন্যান্য প্রোগ্রামিং ভাষার কোর্স পাওয়া যায়।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-3">
            <AccordionTrigger>কোর্সগুলো কি বিনামূল্যে পাওয়া যায়?</AccordionTrigger>
            <AccordionContent>
            অনেক কোর্স বিনামূল্যে পাওয়া যায়, তবে কিছু উন্নত বা বিশেষায়িত কোর্সের জন্য ফি দিতে হতে পারে।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-4">
            <AccordionTrigger>কোর্স শেষ করার পর কি কোন সার্টিফিকেট প্রদান করা হয়?</AccordionTrigger>
            <AccordionContent>
            হ্যাঁ, বেশিরভাগ সাইটে কোর্স সম্পন্ন করার পর সার্টিফিকেট প্রদান করা হয়, তবে এর জন্য সাধারণত একটি ছোট ফি দিতে হয়।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-5">
            <AccordionTrigger>কোর্সের সময়সীমা কীভাবে নির্ধারণ করা হয়?</AccordionTrigger>
            <AccordionContent>
            বেশিরভাগ কোর্স স্বনির্ধারিত হয়, অর্থাৎ আপনি নিজের সময় অনুযায়ী এগিয়ে যেতে পারেন। তবে কিছু নির্দিষ্ট সময়সীমার কোর্সও রয়েছে।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-6">
            <AccordionTrigger>আমি যদি কোর্স করতে করতে কোন সমস্যা সম্মুখীন হই, তাহলে কীভাবে সাহায্য পাব?</AccordionTrigger>
            <AccordionContent>
            আপনি সাইটের ফোরাম, সাপোর্ট সিস্টেম, বা কমিউনিটি গ্রুপের মাধ্যমে সাহায্য চাইতে পারেন। এছাড়াও, অনেক সাইটে লাইভ চ্যাট সাপোর্ট ও রয়েছে।
            </AccordionContent>
        </AccordionItem>
        {/* faq 2 */}
        <AccordionItem value="item-7">
            <AccordionTrigger>আমি কি মোবাইল ডিভাইসে এই কোর্সগুলো করতে পারি?</AccordionTrigger>
            <AccordionContent>
            হ্যাঁ, বেশিরভাগ সাইটে মোবাইল ফ্রেন্ডলি ডিজাইন থাকে, যাতে আপনি মোবাইল বা ট্যাবলেট দিয়েও কোর্স করতে পারেন।
            </AccordionContent>
        </AccordionItem>

    </Accordion>

  )
}

export default AccordionComp