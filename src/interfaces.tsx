export interface IState {
    about: Object,
    profile: Object,
    project: Object,
    message: string,
}

export interface IAction {
    type: string,
    payload: any
}

export interface IAppProps {
    
}

export interface ITextProps{
    storyProps: {
        bgColor: string,
        top: string,
        bottom: string
    }
}

export interface IFormProps {
    // action: string;
}

export interface IFormState {
    [key: string]: any;
    // errors: IErrors;
    // submitSuccess?: boolean;
}

export interface INameProps {
    name: string
}