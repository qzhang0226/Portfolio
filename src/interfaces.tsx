export type Dispatch = React.Dispatch<IAction>;

export interface IState {
    home: Object,
    about: Object,
    profile: Object,
    project: Object,
    projectDetails: Object,
    message: string,
}

export interface IAction {
    type: string,
    payload: any
}

export interface IAppProps{
    data: any,
    store: {
        state: IState,
        dispatch: Dispatch
    }
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