import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Highlight, themes } from "prism-react-renderer";
import beautify from "js-beautify";

// Accept code as a prop
interface CppCodeDialogProps {
  code: string;
}

const CppCodeDialog: React.FC<CppCodeDialogProps> = ({ code }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Format the code using js-beautify
  const formattedCode = beautify.js_beautify(code, {
    indent_size: 4, // Adjust indentation level
    space_in_empty_paren: true,
    preserve_newlines: true,
    max_preserve_newlines: 2,
    wrap_line_length: 80,
  });

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button onClick={handleButtonClick}>View Solution</Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[80vw] h-[80vh] max-w-3xl ">
          <DialogHeader>
            <DialogTitle>Solution</DialogTitle>
            <DialogDescription>Here is the C++ code.</DialogDescription>
          </DialogHeader>
          <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
            <Highlight
              theme={themes.github}
              code={formattedCode}
              language="cpp"
            >
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre>
                  {tokens.map((line, i) => (
                    <div
                      key={i}
                      {...getLineProps({ line })}
                      className="text-sm"
                    >
                      <span>{i + 1} </span>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </pre>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CppCodeDialog;
