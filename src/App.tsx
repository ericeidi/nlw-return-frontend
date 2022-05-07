import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Widget } from "./components/Widget";
import { Landing } from "./pages/Landing";

export function App() {
    
    return (
        <>
            <Landing/>
            <ThemeSwitcher />
            <Widget />
        </>
    );
}