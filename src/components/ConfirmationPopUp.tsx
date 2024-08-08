import {Button, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'

export default function ConfirmationPopUp(props: { isOpen: boolean, close: () => void }) {
    return (
        <>
            <Dialog open={props.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => props.close()} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-slate-700/20">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                Contact Request Submitted
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-black/50">
                                Your contact request has been successfully submitted, a member of our team will be in touch with you shortly
                            </p>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-agrim py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-agrimDark data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={() => props.close()}
                                >
                                    Close
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
