import React, { DragEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import Uploader from '../../components/Uploader';
import { DropFilesEventHandler } from '../../components/Uploader/types';
import { addFiles, addFilesActionCreator } from '../../redux/actions/files';
import { IImageFile } from '../../types/files';

interface IUploaderContainerProps {
  onFilesDrop: addFilesActionCreator;
}

class UploaderContainer extends PureComponent<IUploaderContainerProps, {}> {
  public onDrop: DropFilesEventHandler = (
    acceptedFiles: IImageFile[],
    rejectedFiles: IImageFile[],
    event: DragEvent<HTMLDivElement>
  ) => {
    this.props.onFilesDrop(acceptedFiles);
  }

  public render() {
    return <Uploader onDrop={this.onDrop} />;
  }
}

const mapDispatchToProps = {
  onFilesDrop: addFiles
};

export default connect(
  null,
  mapDispatchToProps
)(UploaderContainer);
