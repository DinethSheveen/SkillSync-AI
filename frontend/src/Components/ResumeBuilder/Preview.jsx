import ModernTemplate from "../ResumeBuilder/templates/ModernTemplate.jsx";
import ClassicTemplate from "../ResumeBuilder/templates/ClassicTemplate.jsx";
import MinimalTemplate from "../ResumeBuilder/templates/MinimalTemplate.jsx";
import MinimalImageTemplate from "../ResumeBuilder/templates/MinimalImageTemplate.jsx";

function Preview({data,accent_color,template,classes=""}) {

    const loadTemplate = () => {
        // Logic to load the selected template
        switch(template){
            case "modern":
                return <ModernTemplate data={data} accent_color={accent_color} />;
            case "minimal":
                return <MinimalTemplate data={data} accent_color={accent_color} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accent_color={accent_color} />;
            default:
                return <ClassicTemplate data={data} accent_color={accent_color} />;
        }
    }

  return (
    <div>
        <div className={`border border-slate-400 mx-auto resume-preview bg-white ${classes}`}>
            {loadTemplate()}
        </div>
    </div>
  )
}

export default Preview