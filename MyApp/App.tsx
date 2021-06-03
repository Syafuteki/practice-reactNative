import React from 'react';
import { SafeAreaView } from 'react-native';
import Sample1 from './sampleCode/sample1';
import Sample2 from './sampleCode/sample2';
import Sample3 from './sampleCode/sample3';
import Sample4 from './sampleCode/sample4';



export default function App() {
  return (
    <SafeAreaView>
      <Sample1 />
      <Sample2 />
      {/* <Sample3 /> */}
      <Sample4 />
    </SafeAreaView>
    
  )
}
