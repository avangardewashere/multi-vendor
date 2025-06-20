import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
export default function Home() {

  return (
    <div className="p-6">
      <div className="flex flex-col gap-y-10">
        <div>
          <Button variant="elevated">
            I am button
          </Button>
        </div>

        <div>
          <Input placeholder="I am an Input" />
        </div>
        

        <div>
          <Progress value={50} />
        </div>

        <div>
        <Textarea readOnly value={"I am text area"} /> 
        </div>

        <div>
          <Checkbox /> 
        </div>

      </div>

    </div>
  );
}
