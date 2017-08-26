export class ReportInfo {
    public Name: string;
    public ReportPath: string;
    public ReportParams: Array<ReportParameterInfo>;
    public TotalPages: number;

    constructor() {
        this.ReportParams = new Array<ReportParameterInfo>();
    }
}

export class ReportParameterInfo {
    public Name: string;
    public Prompt: string;
    public MultiValue: boolean;
    public ValidValues: Array<ValidValue>;
    public SelectedValues: Array<string>;
    public Type: ParameterTypeEnum;
    public PromptUser: boolean;
    public AllowBlank: boolean;
    public Dependencies: Array<string>;
    public Children: Array<string>;
    public Nullable: boolean;

    constructor(){
        this.ValidValues = new Array<ValidValue>();
        this.SelectedValues = new Array<string>();
    }
}

export enum ParameterTypeEnum {
    Boolean,
    DateTime,
    Integer,
    Float,
    String
}

class ValidValue {
    public Label: string;
    public Value: string;

	constructor(label: string, value: string){
        this.Label = label;
        this.Value = value;
    }
}

export class TreeItem {
    public value: number;
    public parID: number;
    public text: string;
}