export interface IState {
    about: Object,
    profile: Object,
    project: Object,
}

export interface IAction {
    type: string,
    payload: any
}

export interface IAppProps {
    
}

export interface TextProps{
    storyProps: {
        bgColor: string,
        top: string,
        bottom: string
    }
}