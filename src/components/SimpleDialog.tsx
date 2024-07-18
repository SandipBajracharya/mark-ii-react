import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import PropTypes from 'prop-types';
import Button from './Button';

type DialogType = {
  isOpen: boolean;
  title: string;
  description: string;
  affirmativeText?: string;
  negativeText?: string;
  affirmativeAction: () => void;
  negativeAction: () => void;
};

const SimpleDialog: React.FC<DialogType> = ({
  isOpen,
  title,
  description,
  affirmativeText = 'Proceed',
  negativeText = 'Cancel',
  affirmativeAction,
  negativeAction,
}) => {
  return (
    <Dialog open={isOpen} onClose={negativeAction} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-700 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  !
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900 uppercase"
                  >
                    {title}
                  </DialogTitle>
                  <div className="mt-3">
                    <p className="text-md text-gray-500">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Button
                classes="bg-primary text-sm"
                label={affirmativeText}
                onClickAction={affirmativeAction}
              />
              <Button
                classes="bg-danger text-sm mr-2"
                label={negativeText}
                onClickAction={negativeAction}
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  affirmativeText: PropTypes.string,
  negativeText: PropTypes.string,
  affirmativeAction: PropTypes.func.isRequired,
  negativeAction: PropTypes.func.isRequired,
};

export default SimpleDialog;
