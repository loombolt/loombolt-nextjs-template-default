"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCounterStore } from "@/store/counter-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { findWelcomeRecordById } from "@/db/loomboltdb-function-tutorial";

export function LibraryShowcase() {
  const { count, increment, decrement, reset } = useCounterStore();
  const [scale, setScale] = useState(0.5);
  const [DBMessage, setDBMessage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await findWelcomeRecordById(1);
      if (error) {
        setDBMessage('Error fetching data from DB');
      } else {
        setDBMessage(data.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  
  return (
    <div 
      className="w-full max-w-5xl mx-auto space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Component Foundation</CardTitle>
            <CardDescription>A solid set of pre-made UI elements to build with.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">Components</Badge>
            <Badge variant="secondary">Customizable</Badge>
            <Badge variant="destructive">Accessible</Badge>
            <Badge variant="default">
              Beautiful
            </Badge>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Button</Button>
          </CardFooter>
        </Card>
        
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Animations</CardTitle>
            <CardDescription>Silky smooth animation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-lg"
                animate={{ 
                  scale,
                  rotate: scale * 90,
                  borderRadius: `${scale * 20}px`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              <div className="w-full space-y-2">
                <p className="text-sm text-center">Adjust Scale: {scale.toFixed(1)}</p>
                <Slider 
                  defaultValue={[0.5]} 
                  max={1} 
                  min={0} 
                  step={0.1} 
                  onValueChange={(value) => setScale(value[0])}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Interactive Elements</CardTitle>
            <CardDescription>Making your application's components interactive.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <motion.div 
              className="text-5xl font-bold"
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              {count}
            </motion.div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={decrement}
              >
                -
              </Button>
              <Button 
                variant="default" 
                onClick={reset}
              >
                Reset
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={increment}
              >
                +
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Counter persists in localStorage
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-none">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>Loombolt DB</CardTitle>
            <CardDescription>Lightweight NoSQL Database</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
             
            <code className="font-mono bg-muted py-1 px-2 rounded text-sm text-muted-foreground text-center whitespace-pre-wrap">
              {loading ? 'Fetching data...' : DBMessage || 'No data found for ID 1.'}
            </code>
          </CardContent>
        </Card>
    </div>
  );
}
