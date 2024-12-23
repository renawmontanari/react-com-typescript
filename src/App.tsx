import React, { createContext } from "react";

// Importar componentes
import FirstComponents from "./components/FirstComponents.tsx";

// Desestruturando props
import SecondComponents from "./components/SecondComponents.tsx";
import Destructuring, { Category } from "./components/Destructuring.tsx";

// useState
import State from "./components/State.tsx";

// Context
import Context from "./components/Context.tsx";

// Type
type textOrNull = string | null;

// Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext>({
  language: "default",
  framework: "default",
  projects: 0,
});

const App: React.FC = () => {
  // Variaveis
  const name: string = "renan";
  const age: number = 90;
  const isWorking: boolean = true;

  // Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // Type
  const myText: textOrNull = "Tem algum texto aqui";
  let secondText: textOrNull = null;
  secondText = "olá";

  // Context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Você está trabalhando</p>}
        <h3>{userGreeting(name)}</h3>
        {/* Componentes reutilizáveis */}
        <FirstComponents />
        <SecondComponents name="Renan" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["typescript", "react"]}
          category={Category.RC}
        />
        <Destructuring
          title="Segundo post"
          content="Algum conteúdo 2"
          commentsQty={30}
          tags={["typescript", "react", "Node"]}
          category={Category.JS}
        />
        <State />
        {myText && <p>Text texto na variável</p>}
        {secondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
};

export default App;
